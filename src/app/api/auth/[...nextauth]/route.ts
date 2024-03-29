import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { Login, LoginDTO } from "@/models";
import axios, { AxiosError } from "axios";

const jwt = require("jsonwebtoken");

const handler = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "username", type: "string" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const data = await loginAbc({
            username: credentials?.username ?? "",
            password: credentials?.password ?? "",
          });
          if (data && data.body) {
            const cognitoData = JSON.parse(data.body);
            return {
              ...cognitoData,
              token: cognitoData.IdToken,
            };
          }
          return null;
        } catch (error) {
          console.error("loginAbc error is: ", error);
        }
      },
    }),
  ],

  callbacks: {
    jwt({ token, user, trigger, session }) {
      if (trigger === "update") {
        return { ...token, user: session.user };
      }

      if (user) {
        console.log("Hay user-------- {}", user);
        const id = getAttributeValueFromToken(
          user.IdToken ?? "",
          "custom:idDb"
        );
        const email = getAttributeValueFromToken(user.IdToken ?? "", "email");
        const name = getAttributeValueFromToken(
          user.IdToken ?? "",
          "cognito:username"
        );
        const role = getAttributeValueFromToken(
          user.IdToken ?? "",
          "custom:Role"
        );
        token.user = {
          ...user,
          id,
          email,
          name,
          role,
        };
      }

      return token;
    },
    session({ session, token }) {
      session.user = token.user;
      return session;
    },
  },
  session: {
    maxAge: 7 * 24 * 60 * 60, // 7 days
  },
  jwt: { maxAge: 60 * 60 * 24 * 7 },
  pages: {
    signIn: "/auth/login",
  },
});

export { handler as GET, handler as POST };

const getAttributeValueFromToken = (token: string, attributeName: string) => {
  try {
    const decodedToken = jwt.decode(token);

    console.log(decodedToken);
    if (decodedToken && decodedToken[attributeName]) {
      return decodedToken[attributeName];
    } else {
      console.error("Atributo no encontrado en el payload del token.");
      return null;
    }
  } catch (error) {
    console.error("Error al decodificar el token:", error);
    return null;
  }
};

const loginAbc = async (params: LoginDTO): Promise<any> => {
  try {
    const res = await axios.post<Login>(
      `${process.env.NEXT_PUBLIC_LAMBDA_AUTH_URL}token`,
      {
        ...params,
      },
      { timeout: 20000 }
    );
    if (res.data.statusCode && res.data.statusCode === 500) {
      throw new Error("Error en el servidor");
    }
    return res.data;
  } catch (error) {
    console.error(
      `[LOGIN ERROR FROM ${params.username}]`,
      (error as AxiosError)?.response?.data
    );
    throw error;
  }
};
