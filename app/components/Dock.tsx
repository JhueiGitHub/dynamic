import Image from "next/image";

const dockIcons = [
  { name: "Flow", icon: "/icons/flow-icon.png" },
  { name: "Figma", icon: "/icons/figma-icon.png" },
  { name: "FigmaClone", icon: "/icons/clerk-icon.png" },
  // Add more app icons as needed
];

export default function Dock({
  toggleApp,
}: {
  toggleApp: (appName: string) => void;
}) {
  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-30 p-2 rounded-t-lg">
      {dockIcons.map(({ name, icon }) => (
        <button key={name} onClick={() => toggleApp(name)} className="mx-2">
          <Image src={icon} alt={name} width={50} height={50} />
        </button>
      ))}
    </div>
  );
}
