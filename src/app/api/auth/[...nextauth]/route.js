import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { SignJWT } from "jose";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

const secret = new TextEncoder().encode(process.env.JWT_SECRET_KEY);

const handler = NextAuth({
  providers: [

    GoogleProvider
    ({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    

    FacebookProvider({  
      clientId: process.env.META_CLIENT_ID,
      clientSecret: process.env.META_CLIENT_SECRET,
    }),


    CredentialsProvider ({
      name: "Credentials",
      credentials:
      {
        email: { label: "Email", type: "email", placeholder: "x@example.com" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {

                                                //Validation
        if ( !credentials?.email || !credentials?.password ) 
        {
          throw new Error("Missing email or password");
        }

                                           // Authentication (replace with real DB check that is in MongoDB!)
        if (
          credentials.email === "test@example.com" &&
          credentials.password === "password123"
        )

          // try {
          //   await connectMongoDB();
          //   const user = await User.findOne({ email });
          //   if (!user) return null;
          //   const passwordMatch = await bcrypt.compare(password, user.password);
          //   if (!passwordMatch) return null;
          //   return user;
          // } catch (error) {
          //   console.log("Error: ", error);
          // }

        {
                                                     // JWT Creation
          const token = await new SignJWT
          ({
            email: credentials.email,
          })

            .setProtectedHeader({ alg: "HS256" })
            .setExpirationTime("1h")
            .sign(secret);

          // Cookie Setup
          return {
            id: "1",
            email: credentials.email,
            token,
          };
        }

        throw new Error("Invalid email or password");
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",                      //Custom login page
  },
  secret: process.env.JWT_SECRET_KEY,


                                        //Add redirect callback for Google login
  callbacks: {
    async redirect({ url, baseUrl }) {
      return `${baseUrl}/dashboard`;
    },
  },
});

export { handler as GET, handler as POST };
