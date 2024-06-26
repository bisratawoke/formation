import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const AuthOption = {
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email" },
        password: { label: "password" },
      },
      async authorize(credentials, req) {
        console.log(credentials);
        return null;
      },
    }),
  ],
};

export const Handler = NextAuth(AuthOption);

export { Handler as GET, Handler as POST };
