/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { AuthOptions } from "next-auth";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import axios from 'axios'
import { encrypt } from "@/lib/utils";

type Err = {
  error: {
    status: number,
    name: string,
    message: string,
  }
}

export const authOptions: AuthOptions = {
    providers: [
      // Configure the Credentials provider for Login
      CredentialsProvider({
        id: "credentials-login",
        name: "Credentials",
        credentials: {
            email: { label: "Email", type: "text", placeholder: "mail@mail.com" },
            password: {  label: "Password", type: "password" }
        },
        async authorize(credentials) {
          try {
            const { data } = await axios.post(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/auth/local`, {
              identifier: credentials?.email,
              password: credentials?.password
            });
            if (data) {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-return
              return data;
            }
            else {
              return null;
            }
          } catch (err) {
            if (axios.isAxiosError(err) && err.response) {
              const errorMessage = (err.response.data as Err).error.message
              console.log("AxiosError: ", errorMessage)
              throw new Error(errorMessage)
            } else {
              const errorMessage = (err as Error).message
              console.log("Error: ", errorMessage)
              throw new Error(errorMessage)
            }
          }
        }
      }),
      // Configure the Credentials provider for Register
      CredentialsProvider({
        id: "credentials-register",
        name: "Credentials",
        credentials: {
          username: { label: "User Name", type: "text", placeholder: "username" },
          email: { label: "Email", type: "text", placeholder: "mail@mail.com" },
          password: {  label: "Password", type: "password" }
        },
        async authorize(credentials) {
          try {
            const { data } = await axios.post(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/auth/local/register`, {
              username: credentials?.username,
              email: credentials?.email,
              password: credentials?.password
            });
            if (data) {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-return
              return data;
            }
            else {
              return null;
            }
          } catch (err) {
            console.log(err)
            if (axios.isAxiosError(err) && err.response) {
              const errorMessage = (err.response.data as Err).error.message
              console.log("AxiosError: ", errorMessage)
              throw new Error(errorMessage)
            } else {
              const errorMessage = (err as Error).message
              console.log("Error: ", errorMessage)
              throw new Error(errorMessage)
            }
          }
        }
      }),
    ],
    callbacks: {
      // Getting the JWT token from API response
      jwt: async ({token, user}) => {
        const isSignIn = user ? true : false;
        if (isSignIn) {
          token.jwt = user.jwt;
          token.id = user.user.id;
          token.name = user.user.username;
          token.email = user.user.email;
          token.confirmed = user.user.confirmed
          token.blocked = user.user.blocked
          token.subscribed = user.user.subscribed
        }
        return Promise.resolve(token);
      },
    
      session: async ({session, token}) => {
        if (!token.jwt || token.jwt.length === 0) throw new Error("No jwt token")
        session.jwt = encrypt(token.jwt); 
        session.user.id = token.id
        session.user.username = token.name
        session.user.email = token.email
        session.user.confirmed = token.confirmed
        session.user.blocked = token.blocked
        session.user.subscribed = token.subscribed
        return Promise.resolve(session);
      },
    }
};

// Create NextAuth handler using the defined authentication options
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }

// Declare custom types for NextAuth modules
declare module "next-auth" {
    // Define custom session properties
    interface Session {
        jwt: string;
        user: {
            id: number,
            username: string,
            email: string;
            provider: string,
            confirmed: boolean,
            blocked: boolean,
            subscribed: boolean,
            createdAt: string,
            updatedAt: string
        }
        expires: string
    }

    // Define custom user properties
    interface User {
        jwt: string;
        user: {
            id: number;
            username: string;
            email: string;
            provider: string,
            confirmed: boolean,
            blocked: boolean,
            subscribed: boolean,
            createdAt: string,
            updatedAt: string
        };
    }
}


// Declare custom JWT properties
declare module "next-auth/jwt" {
    interface JWT {
        name: string,
        email: string,
        confirmed: boolean,
        blocked: boolean,
        subscribed: boolean,
        jwt: string,
        id: number,
        iat: number,
        exp: number,
        jti: string
    }
}