import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import LoginPageClient from "./LoginPageClient";
import { authOptions } from "@/app/api/auth/[...nextauth]/route.js";

export const metadata = {
  title: "Login to Acme Inc.",
  description: "Secure login page for Acme Inc. accounts.",
};

export default async function LoginPage() {
  const session = await getServerSession(authOptions);

  if (session) {
    // Redirect authenticated users to dashboard
    redirect("/dashboard");
  }

  return <LoginPageClient />;
}



// import { Metadata } from "next";
// import LoginPageClient from "./LoginPageClient";

// export const metadata: Metadata = {
//   title: "Login to Acme Inc.",
//   description: "Secure login page for Acme Inc. accounts.",
// };

// export default function LoginPage() {
//   return <LoginPageClient />;
// }