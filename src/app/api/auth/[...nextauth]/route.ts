/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import NextAuth from "next-auth"
import { authOptions } from "./auth";

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