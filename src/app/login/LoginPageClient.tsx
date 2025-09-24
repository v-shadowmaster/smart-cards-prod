"use client";

import Link from "next/link";
import { FaApple, FaGoogle } from "react-icons/fa";
import { SiMeta } from "react-icons/si";
import LoginForm from "@/components/LoginForm";
import { signIn, useSession } from "next-auth/react";

export default function LoginPageClient() {
  const session = useSession();
  console.log(session);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4 font-sans">
      <div className="flex w-full max-w-md rounded-xl bg-white shadow-lg overflow-hidden">
        <div className="flex-1 p-8 sm:p-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800">Welcome back</h1>
            <p className="mt-2 text-sm text-gray-500">
              Login to your Acme Inc account
            </p>
          </div>

          <div className="mt-8">
            <LoginForm />

            <div className="mt-6 text-center">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-2 text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="mt-6 flex justify-center space-x-4">
                <button
                  aria-label="Continue with Apple"
                  onClick={() => signIn("apple")}
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-300 transition-colors duration-200 hover:bg-gray-50 cursor-pointer"
                >
                  <FaApple className="h-6 w-6 text-gray-700" />
                </button>

                <button
                  aria-label="Continue with Google"
                  onClick={() => signIn("google")}
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-300 transition-colors duration-200 hover:bg-gray-50 cursor-pointer"
                >
                  <FaGoogle className="h-6 w-6 text-gray-700" />
                </button>

                <button
                  aria-label="Continue with Auth0"
                  onClick={() => signIn("auth0")}
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-300 transition-colors duration-200 hover:bg-gray-50 cursor-pointer"
                >
                  <SiMeta className="h-6 w-6 text-gray-700" />
                </button>
              </div>

              <p className="mt-8 text-sm text-gray-500">
                Don&apos;t have an account?{" "}
                <Link
                  href="/signup"
                  className="font-semibold text-blue-600 hover:text-blue-500"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>

          <p className="text-xs text-gray-400 mt-6 text-center md:mt-4 lg:relative lg:mt-4 lg:text-center">
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
