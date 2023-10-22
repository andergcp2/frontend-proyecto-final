import { User as CustomUser } from "@/models";
import { DefaultSession, DefaultUser } from "next-auth";
import { JWT, DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: CustomUser;
  }

  interface User extends DefaultUser, CustomUser {}
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    user: CustomUser;
  }
}
