"use client";

import { useAuth } from "../../layout";
import { useRouter } from "next/navigation";

export default function Login() {
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = () => {
    login();
    router.push("/apps/flow");
  };

  return (
    <div className="flex items-center justify-center h-full">
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Login
      </button>
    </div>
  );
}
