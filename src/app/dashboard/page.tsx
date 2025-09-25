"use client";

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const { data: session } = useSession();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut({
      redirect: false,                                                                 // keep manual redirect
      callbackUrl: "/login",                                                          // force redirect to login page
    });
    router.push("/login");                                                         // client-side redirect
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">
        Welcome, {session?.user?.name || "User"}!
      </h1>
      <button
        onClick={handleLogout}
        className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-500"
      >
        Logout
      </button>
    </div>
  );
}
