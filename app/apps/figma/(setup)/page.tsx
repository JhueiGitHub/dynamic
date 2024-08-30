interface SetupPageProps {
  onLogin: () => void;
}

export default function SetupPage({ onLogin }: SetupPageProps) {
  return (
    <div className="flex items-center justify-center h-full">
      <button
        onClick={onLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Login to Figma Clone
      </button>
    </div>
  );
}
