import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { Login, LoginDTO } from "@/models";
import axios, { AxiosError } from "axios";

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
        console.log("Hay user-------- ", user);
        token.user = {
          ...user,
          id: Number(user.id),
          email: user.email ?? "",
          name: user.name ?? "",
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

const loginAbc = async (params: LoginDTO): Promise<any> => {
  try {
    const res = await axios.post<Login>(
      `${process.env.NEXT_PUBLIC_LAMBDA_AUTH_URL}token`,
      {
        ...params,
      },
      { timeout: 20000 }
    );
    return res.data;
  } catch (error) {
    console.error(
      `[LOGIN ERROR FROM ${params.username}]`,
      (error as AxiosError)?.response?.data
    );
    throw error;
  }
};
