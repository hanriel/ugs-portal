import NextAuth from "next-auth"
import { authConfig } from "./auth.config"
import Credentials from "next-auth/providers/credentials"

export const { auth, handlers, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      credentials: {
        login: {},
        password: {},
      },
      async authorize(credentials) {
        const res = await fetch("https://pmk-api.hanriel.ru" + "/auth/singin", {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });
        
        const user = await res.json()
        if (res.ok && user) {
          return user
        } else {
          return null
        }
      },
    }),
  ],
})
