import { describe, it, expect } from "vitest";
import { contactSchema, getFieldErrors } from "@/lib/contactValidation";

describe("contact form validation", () => {
  const valid = {
    name: "Jane Doe",
    email: "jane@example.com",
    message: "Hello, I'd like to work with you!",
  };

  it("accepts a valid submission", () => {
    const result = contactSchema.safeParse(valid);
    expect(result.success).toBe(true);
  });

  it("rejects an empty name", () => {
    const result = contactSchema.safeParse({ ...valid, name: "   " });
    expect(result.success).toBe(false);
  });

  it("rejects an invalid email", () => {
    const result = contactSchema.safeParse({ ...valid, email: "not-an-email" });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(getFieldErrors(result.error).email).toMatch(/valid email/i);
    }
  });

  it("rejects a message longer than 1000 characters", () => {
    const result = contactSchema.safeParse({
      ...valid,
      message: "x".repeat(1001),
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(getFieldErrors(result.error).message).toMatch(/1000/);
    }
  });

  it("accepts a message of exactly 1000 characters", () => {
    const result = contactSchema.safeParse({
      ...valid,
      message: "x".repeat(1000),
    });
    expect(result.success).toBe(true);
  });
});
