"use client";

import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface ProfileFormProps {
  defaultName: string;
  defaultEmail: string;
}

export function ProfileForm({ defaultName, defaultEmail }: ProfileFormProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Avatar className="h-16 w-16">
          <AvatarFallback className="text-2xl">
            {defaultName.slice(0, 1).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium text-text-dark">{defaultName}</p>
          <p className="text-sm text-text-dark/70">{defaultEmail}</p>
        </div>
      </div>
      <Button
        variant="outline"
        className="w-full"
        onClick={() => signOut({ callbackUrl: "/" })}
      >
        Log out
      </Button>
    </div>
  );
}
