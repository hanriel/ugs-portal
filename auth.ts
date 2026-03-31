import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const { auth, handlers, signIn, signOut } = NextAuth({
  pages: {
    signIn: '/login',
  },
  providers: [
    Credentials({
      credentials: {
        username: { label: "Username", type: "username" },
        password: { label: "Password", type: "password" }
      },
      authorize: async (credentials) => {
        const res = await fetch("http://api.p87.pmkspo.ru/auth/login", {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });
        
        let user = await res.json()
        if (res.ok && user) {
          return user
        } else {
          return null
        }
      },
    }),
  ],
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnMain = nextUrl.pathname.startsWith('/');
      if (isOnMain) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/', nextUrl));
      }
      return true;
    },
    async jwt({ token, user }) {
      
      if (user) {
        // Добавляем нужные поля из объекта пользователя в токен
        token.id = user.id
        token.name = user.name
        token.accessToken = user.accessToken
      }

      return token
    },
    async session({ session, token, user }) {      
      if (session.user) {
        session.user.id = token.id as string
        session.user.login = token.login as string
        session.user.name = token.name as string
        session.user.email = token.email as string
        // @ts-ignore
        session.accessToken = token.accessToken
      }
      return session
    }
  },
})
