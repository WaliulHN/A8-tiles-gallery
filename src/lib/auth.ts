import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { nextCookies } from "better-auth/next-js";
import connectDB from "./db";

export const auth = betterAuth({
  database: mongodbAdapter(await connectDB()),
  
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
  },
  
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
  },
  
  plugins: [nextCookies()],
  
  user: {
    additionalFields: {
      photoUrl: { type: "string", required: false },
    }
  }
});