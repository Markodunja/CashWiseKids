import { z } from "zod";

export const signupParentSchema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const addChildSchema = z.object({
  name: z.string().min(1, "Name is required").max(50),
  age: z.coerce.number().min(5).max(14),
});

export type SignupParentInput = z.infer<typeof signupParentSchema>;
export type AddChildInput = z.infer<typeof addChildSchema>;
