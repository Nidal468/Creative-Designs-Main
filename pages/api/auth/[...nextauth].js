import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: '260949425880-7ela5l7segv0gdta27l43232oahnisum.apps.googleusercontent.com',
      clientSecret: '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',
    }),
  ],
});
