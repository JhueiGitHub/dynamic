interface MainPageProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onLogout: () => void;
}

export default function MainPage({
  currentPath,
  onNavigate,
  onLogout,
}: MainPageProps) {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Figma Clone</h2>
      <nav className="mb-4">
        <button
          onClick={() => onNavigate("/")}
          className="mr-2 text-blue-500 hover:underline"
        >
          Home
        </button>
        <button
          onClick={() => onNavigate("/projects")}
          className="mr-2 text-blue-500 hover:underline"
        >
          Projects
        </button>
        <button onClick={onLogout} className="text-red-500 hover:underline">
          Logout
        </button>
      </nav>
      {currentPath === "/" && <div>Welcome to Figma Clone!</div>}
      {currentPath === "/projects" && (
        <div>
          <h3 className="text-xl font-bold mb-2">Your Projects</h3>
          <ul>
            <li>Project 1</li>
            <li>Project 2</li>
            <li>Project 3</li>
          </ul>
        </div>
      )}
    </div>
  );
}
