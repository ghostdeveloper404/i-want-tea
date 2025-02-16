import mongoose from 'mongoose'
import NextAuth from 'next-auth'
import User from '@/models/User'

// import Payment from '@/models/payment'

// import FacebookProvider from 'next-auth/providers/facebook'
 import GoogleProvider from 'next-auth/providers/google'
// import EmailProvider from 'next-auth/providers/email'
import GithubProvider from 'next-auth/providers/github'



export const authoptions = NextAuth({

  providers: [
    // OAuth authentication providers...
   
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_ID,
    //   clientSecret: process.env.FACEBOOK_SECRET
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
        // InstagramProvider({
        //   clientId: process.env.INSTAGRAM_CLIENT_ID,
        //   clientSecret: process.env.INSTAGRAM_CLIENT_SECRET
        // }),
    // // Passwordless / email sign in
    // EmailProvider({
    //   server: process.env.MAIL_SERVER,
    //   from: 'NextAuth.js <no-reply@example.com>'
    // }),

    GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret:process.env.GITHUB_SECRET
    })
  ],
    
  callbacks: {


    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider ==="github"){
         const client = await mongoose.connect(process.env.MONGODB_URI)
         const email = profile.email
        
         const currentUser = await User.findOne({email:email})
          if(!currentUser){
            const newUser = new User({
              
              email: email,
              username: email.split('@')[0],
              
            })
          await newUser.save()
          user.name = newUser.username
        }
      else{
        user.name = currentUser.username
      }
      return true
    }
      else if (account.provider ==="google"){
         const client = await mongoose.connect(process.env.MONGODB_URI)
         const email = profile.email
        
         const currentUser = await User.findOne({email:email})
          if(!currentUser){
            const newUser = new User({
              
              email: email,
              username: email.split('@')[0],
              
            })
          await newUser.save()
          user.name = newUser.username
        }
      else{
        user.name = currentUser.username
      }
      return true
    }
   }
  }
}) 

export {authoptions as GET, authoptions as POST}