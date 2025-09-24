import { Metadata } from "next";
import LoginPageClient from "./LoginPageClient";

export const metadata: Metadata = {
  title: "Login to Acme Inc.",
  description: "Login page for Acme Inc. accounts.",
};

export default function LoginPage() {
  return <LoginPageClient />;
}
