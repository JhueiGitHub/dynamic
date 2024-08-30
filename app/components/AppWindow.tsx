import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

export default function AppWindow({
  appName,
  onClose,
}: {
  appName: string;
  onClose: () => void;
}) {
  const pathname = usePathname();
  const [internalPath, setInternalPath] = useState("");

  useEffect(() => {
    if (pathname.startsWith(`/apps/${appName.toLowerCase()}`)) {
      setInternalPath(
        pathname.replace(`/apps/${appName.toLowerCase()}`, "") || "/"
      );
    }
  }, [pathname, appName]);

  const AppComponent = dynamic(
    () => import(`@/app/apps/${appName.toLowerCase()}/page`),
    {
      loading: () => <p>Loading...</p>,
    }
  );

  return (
    <div className="absolute top-10 left-10 w-3/4 h-3/4 bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-gray-200 p-2 flex justify-between items-center">
        <h2>{appName}</h2>
        <button onClick={onClose}>Close</button>
      </div>
      <div className="p-4 h-full">
        <AppComponent />
      </div>
    </div>
  );
}
