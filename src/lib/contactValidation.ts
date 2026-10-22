import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Please enter your name.")
    .max(100, "Name must be 100 characters or less."),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email.")
    .email("Please enter a valid email address.")
    .max(255, "Email must be 255 characters or less."),
  message: z
    .string()
    .trim()
    .min(1, "Please enter a message.")
    .max(1000, "Message must be 1000 characters or less."),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export type ContactFieldErrors = Partial<Record<keyof ContactFormData, string>>;

export function getFieldErrors(
  error: z.ZodError<ContactFormData>
): ContactFieldErrors {
  const errors: ContactFieldErrors = {};
  for (const issue of error.errors) {
    const key = issue.path[0] as keyof ContactFormData;
    if (key && !errors[key]) errors[key] = issue.message;
  }
  return errors;
}
