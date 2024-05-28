import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const loginHistorySchema = z.object({
  email: z.string().email(),
});

export const signupSchema = loginSchema;

export const forgotPasswordSchema = z.object({
  email: z.string().email(),
});
