"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupParentSchema, addChildSchema } from "@/lib/validators";
import type { SignupParentInput, AddChildInput } from "@/lib/validators";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { WelcomeSprout } from "./WelcomeSprout";

type Step = 1 | 2 | 3;

export function SignupSteps() {
  const router = useRouter();
  const [step, setStep] = useState<Step>(1);
  const [childName, setChildName] = useState("");

  const parentForm = useForm<SignupParentInput>({
    resolver: zodResolver(signupParentSchema),
    defaultValues: { email: "", password: "" },
  });

  const childForm = useForm<AddChildInput>({
    resolver: zodResolver(addChildSchema),
    defaultValues: { name: "", age: 8 },
  });

  function onParentSubmit(data: SignupParentInput) {
    // MVP: no real signup; just advance to step 2
    setStep(2);
  }

  function onChildSubmit(data: AddChildInput) {
    setChildName(data.name);
    setStep(3);
  }

  function onWelcomeComplete() {
    // MVP: redirect to login so they can sign in with the email they "registered"
    router.push("/login?registered=1");
    router.refresh();
  }

  if (step === 3) {
    return (
      <Card className="w-full max-w-md">
        <CardContent className="pt-6">
          <WelcomeSprout childName={childName} onComplete={onWelcomeComplete} />
        </CardContent>
      </Card>
    );
  }

  if (step === 2) {
    return (
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Add your first child</CardTitle>
          <CardDescription>
            Create their Sprout Island profile (name and age).
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={childForm.handleSubmit(onChildSubmit)}
            className="space-y-4"
          >
            <div className="space-y-2">
              <Label htmlFor="name">Child&apos;s name</Label>
              <Input
                id="name"
                {...childForm.register("name")}
                placeholder="Alex"
                autoComplete="off"
              />
              {childForm.formState.errors.name && (
                <p className="text-sm text-error">
                  {childForm.formState.errors.name.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="age">Age (5–14)</Label>
              <Input
                id="age"
                type="number"
                min={5}
                max={14}
                {...childForm.register("age")}
              />
              {childForm.formState.errors.age && (
                <p className="text-sm text-error">
                  {childForm.formState.errors.age.message}
                </p>
              )}
            </div>
            <div className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setStep(1)}
              >
                Back
              </Button>
              <Button type="submit" className="flex-1">
                Continue
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Create your account</CardTitle>
        <CardDescription>
          Parent or guardian: use your email. We&apos;ll add your child next.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={parentForm.handleSubmit(onParentSubmit)}
          className="space-y-4"
        >
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              {...parentForm.register("email")}
              placeholder="you@example.com"
              autoComplete="email"
            />
            {parentForm.formState.errors.email && (
              <p className="text-sm text-error">
                {parentForm.formState.errors.email.message}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              {...parentForm.register("password")}
              placeholder="••••••••"
              autoComplete="new-password"
            />
            {parentForm.formState.errors.password && (
              <p className="text-sm text-error">
                {parentForm.formState.errors.password.message}
              </p>
            )}
          </div>
          <Button type="submit" className="w-full">
            Continue
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
