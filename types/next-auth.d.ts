import "next-auth";

declare module "next-auth" {
  interface Session {
    accessToken?: string;
    user: {
      id?: string;
      name?: string;
      login?: string;
      email?: string;
      access_token?: string;
    };
  }

  interface User {
    accessToken?: string;
  }
}