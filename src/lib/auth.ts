import { NextAuthOptions } from "next-auth";
import Github from "next-auth/providers/github";

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    Github({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
} satisfies NextAuthOptions;
