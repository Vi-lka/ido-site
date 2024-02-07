/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { AuthOptions } from "next-auth";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import axios from 'axios'
import { encrypt } from "@/lib/utils";

export const authOptions: AuthOptions = {
    providers: [
      // Configure the Credentials provider
      CredentialsProvider({
        id: "credentials",
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
          } catch (e) {
            console.log('caught error');
            console.log(e);
            const errorMessage = e
            // Redirecting to the login page with error message in the URL
            // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
            throw new Error(errorMessage + '&email=' + credentials?.email)
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
        }
        return Promise.resolve(token);
      },
    
      session: async ({session, token}) => {
        session.jwt = encrypt(token.jwt);
        session.user.id = token.id
        session.user.username = token.name
        session.user.email = token.email
        session.user.confirmed = token.confirmed
        session.user.blocked = token.blocked
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
            createdAt: string,
            updatedAt: string
        }
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
            createdAt: string,
            updatedAt: string
        };
    }

    // Define custom session properties
    interface Session {
        user: {
            id: number;
            username: string;
            email: string;
            provider: string,
            confirmed: boolean,
            blocked: boolean,
            createdAt: string,
            updatedAt: string
        },
        expires: string
    }      
}


// Declare custom JWT properties
declare module "next-auth/jwt" {
    interface JWT {
        name: string,
        email: string,
        confirmed: boolean,
        blocked: boolean,
        jwt: string,
        id: number,
        iat: number,
        exp: number,
        jti: string
    }
  }

// // Declare custom types for NextAuth modules
// declare module "next-auth" {
//     // Define custom session properties
//     interface Session {
//       user: {
//         sub: string;
//         email_verified: boolean;
//         name: string;
//         preferred_username: string;
//         given_name: string;
//         family_name: string;
//         email: string;
//         id: string;
//         org_name?: string;
//         telephone?: string;
//         roles?: string[];
//       };
//       error?: string | null;
//       access_token: string;
//     }
  
//     // Define custom user properties
//     interface User {
//       sub: string;
//       email_verified: boolean;
//       name: string;
//       telephone: string;
//       preferred_username: string;
//       org_name: string;
//       given_name: string;
//       family_name: string;
//       email: string;
//       id: string;
//       tokens?: Account;
//     }
  
//     // Define custom account properties
//     interface Account {
//       provider: string;
//       type: ProviderType;
//       id: string;
//       access_token: string;
//       refresh_token: string;
//       idToken: string;
//       expires_in: number;
//       refresh_expires_in: number;
//       token_type: string;
//       id_token: string;
//       "not-before-policy": number;
//       session_state: string;
//       scope: string;
//     }
  
//     // Define custom profile properties
//     interface Profile {
//       sub?: string;
//       email_verified: boolean;
//       name?: string;
//       telephone: string;
//       preferred_username: string;
//       org_name: string;
//       given_name: string;
//       family_name: string;
//       email?: string;
//     }
//   }

// // Declare custom JWT properties
// declare module "next-auth/jwt" {
//     interface JWT {
//       access_token: string;
//       refresh_token: string;
//       refresh_expires_in: number;
//       expires_in: number;
//       user: {
//         sub: string;
//         email_verified: boolean;
//         name: string;
//         telephone: string;
//         preferred_username: string;
//         org_name: string;
//         given_name: string;
//         family_name: string;
//         email: string;
//         id: string;
//       };
//       error?: string | null;
//     }
//   }