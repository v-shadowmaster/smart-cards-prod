"use client";

import Link from "next/link";
import { FaApple, FaGoogle } from "react-icons/fa";
import { SiMeta } from "react-icons/si";
import LoginForm from "@/components/LoginForm";
import { signIn, useSession } from "next-auth/react";

const SocialButton = ({
  label,
  icon: Icon,
  provider,
}: {
  label: string;
  icon: React.ElementType;
  provider: string;
}) => (
  <button
    aria-label={label}
    onClick={() => signIn(provider)}
    className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-300 transition-colors duration-200 hover:bg-gray-50"
  >
    <Icon className="h-6 w-6 text-gray-700" />
  </button>
);

export default function LoginPageClient() {
  const { data: session } = useSession();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4 font-sans">
      <div className="flex w-full max-w-md rounded-xl bg-white shadow-lg overflow-hidden">
        <div className="flex-1 p-8 sm:p-12">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800">Welcome back</h1>
            <p className="mt-2 text-sm text-gray-500">
              Login to your Acme Inc account
            </p>
          </div>

          {/* Login Form */}
          <div className="mt-8">
            <LoginForm />

            {/* Divider */}
            <div className="mt-6 relative text-center text-sm">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <span className="relative bg-white px-2 text-gray-500">
                Or continue with
              </span>
            </div>

            {/* Social Login Buttons */}
            <div className="mt-6 flex justify-center space-x-4">
              <SocialButton label="Continue with Apple" icon={FaApple} provider="apple" />
              <SocialButton label="Continue with Google" icon={FaGoogle} provider="google" />
              <SocialButton label="Continue with Auth0" icon={SiMeta} provider="auth0" />
            </div>

            {/* Sign Up Link */}
            <p className="mt-8 text-sm text-gray-500 text-center">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="font-semibold text-blue-600 hover:text-blue-500">
                Sign up
              </Link>
            </p>
          </div>

          {/* Footer */}
          <p className="text-xs text-gray-400 mt-6 text-center md:mt-4">
            By clicking continue, you agree to our{" "}
            <Link href="/terms" className="underline hover:text-gray-500">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="underline hover:text-gray-500">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
