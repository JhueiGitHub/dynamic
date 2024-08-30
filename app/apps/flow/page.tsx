// File: /app/apps/flow/page.tsx
"use client";
import { useState } from "react";

export default function FlowApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-2xl mb-4">Welcome to Flow</h1>
        <button
          onClick={handleLogin}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Login
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl mb-4">Flow App</h1>
      <p>You are now logged in to the Flow app!</p>
    </div>
  );
}
