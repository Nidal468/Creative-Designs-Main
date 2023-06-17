import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: '260949425880-h18l1ecb8g5s7p2osr9n80v805r8fd8d.apps.googleusercontent.com',
      clientSecret: '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',
    }),
  ],
});
