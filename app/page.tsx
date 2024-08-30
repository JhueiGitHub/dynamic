// File: /app/page.tsx
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Desktop from "./components/Desktop";

export default function Home() {
  return (
    <ClerkProvider>
      <header>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <Desktop />
        </SignedIn>
      </header>
    </ClerkProvider>
  );
}
