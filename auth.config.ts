import type { NextAuthConfig } from 'next-auth';
import NextAuth, { type DefaultSession } from "next-auth"
 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/', nextUrl));
      }
      return true;
    },
    async jwt({ token, user }) {
      return { ...token, ...user }
    },
    async session({ session, token, user }) {
      // session.user = token
      return session
    }
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;