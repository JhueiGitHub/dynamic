"use client";

import { useState } from "react";
import SetupPage from "./(setup)/page";
import MainPage from "./(main)/page";

export default function FigmaApp() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [internalPath, setInternalPath] = useState("/");

  const handleLogin = () => {
    setIsAuthenticated(true);
    setInternalPath("/");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setInternalPath("/");
  };

  const handleNavigate = (path: string) => {
    setInternalPath(path);
  };

  if (!isAuthenticated) {
    return <SetupPage onLogin={handleLogin} />;
  }

  return (
    <MainPage
      currentPath={internalPath}
      onNavigate={handleNavigate}
      onLogout={handleLogout}
    />
  );
}
