import Link from "next/link";
import { SignupSteps } from "@/components/signup/SignupSteps";

export default function SignupPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-bg-warm px-4 py-8">
      <SignupSteps />
      <p className="mt-6 text-center text-sm text-text-dark/70">
        <Link href="/login" className="underline hover:text-primary">
          Log in instead
        </Link>
      </p>
    </div>
  );
}
