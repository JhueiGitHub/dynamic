// File: /components/Desktop.tsx
"use client";

import { useState } from "react";
import Dock from "./Dock";
import AppWindow from "./AppWindow";
import { ClerkProvider, UserButton } from "@clerk/nextjs";

export default function Desktop() {
  const [openApps, setOpenApps] = useState<string[]>([]);

  const toggleApp = (appName: string) => {
    setOpenApps((prev) =>
      prev.includes(appName)
        ? prev.filter((app) => app !== appName)
        : [...prev, appName]
    );
  };

  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/placeholder-wallpaper.jpg')" }}
    >
      <UserButton />
      {openApps.map((app) => (
        <AppWindow key={app} appName={app} onClose={() => toggleApp(app)} />
      ))}
      <Dock toggleApp={toggleApp} />
    </div>
  );
}
