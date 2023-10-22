import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { Auth } from "aws-amplify";

const handler = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "email" },
        password: { label: "password" },
      },
      async authorize(credentials) {
        console.log("Ander credentials", credentials);
        const cognitoUser = await Auth.signIn({
          username: credentials?.email || "",
          password: credentials?.password || "",
        });
        console.log("Ander cognitoUser", cognitoUser);
        console.log("Ander cognitoUser Session", cognitoUser.Session);
        const user = await Auth.currentAuthenticatedUser({
          bypassCache: false, // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
        });
        console.log("Ander user", user);
        if (cognitoUser!!) {
          // console.log(
          //   "Ander aqui fue",
          //   cognitoUser.attributes.sub,
          //   cognitoUser.attributes.email,
          //   { ...cognitoUser }
          // );
          console.log("Ander aqui fue2 ");
          // return {
          //   id: cognitoUser.attributes.sub,
          //   email: cognitoUser.attributes.email,
          //   name: cognitoUser.attributes.name,
          // };
          // Get the user JWT Token and add it in the token object
          cognitoUser.Session = {
            ...cognitoUser.Session,
            token: cognitoUser.signInUserSession.idToken.jwtToken,
          };

          return cognitoUser.Session;
        }
        console.log("Ander va a retornar null");
        return null;
      },
    }),
  ],
  callbacks: {
    jwt({ token, user, trigger, session }) {
      if (trigger === "update") {
        return { ...token, user: session.user };
      }

      if (user) {
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
      console.log("Ander session in callback", session);
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

// const loginQantto = async (params: LoginDTO): Promise<Login | null> => {
//   try {
//     const res = await axios.post<Login>(
//       `${process.env.NEXT_PUBLIC_API_URL}users/login/`,
//       {
//         ...params,
//       },
//       { timeout: 20000 },
//     )

//     return res.data
//   } catch (error) {
//     console.error(
//       `[LOGIN ERROR FROM ${params.email}]`,
//       (error as AxiosError)?.response?.data,
//     )
//     throw error
//   }
// }
