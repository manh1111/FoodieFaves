import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import User from '@models/user';
import { connectToDB } from '@utils/database';

// console.log({
//     clientId: process.env.GOOGLE_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
// })
export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      // store the user id from MongoDB to session
      const sessionUser = await User.findOne({ email: session.user.email });
      session.user.id = sessionUser._id.toString();

      return session;
    },
    async signIn({ account, profile, user, credentials }) {
      try {
        await connectToDB();
        console.log(profile);

        // check if user already exists
        const userExists = await User.findOne({ email: profile?.email });

        // if not, create and save in MongoDB
        if (!userExists) {
          await User.create({
            email: profile?.email,
            username: profile?.name?.replace(' ', '').toLowerCase(),
            image: (profile as any).picture,
            role: 'user',
          });
        }

        return true;
      } catch (error: any) {
        console.log('Error checking if user exists: ', error?.message);
        return false;
      }
    },
  },
};

export default NextAuth(authOptions);
