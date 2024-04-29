"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Here you would implement your logic to send a password reset email
    // For demonstration, let's assume a simple alert message for now
    alert(`Password reset email sent to ${email}`);
    setEmail(""); // Clear email input
    setIsSubmitted(true); // Set submitted flag
  };

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl">Forgot Password</CardTitle>
        <CardDescription>
          Enter your email to reset your password
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isSubmitted ? (
          <div className="text-center">
            <p className="text-green-600 font-semibold mb-4">
              Password reset email sent successfully!
            </p>
            <Link href="/login" passHref>
              <Button variant="outline">Return to Login</Button>
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Reset Password
            </Button>
          </form>
        )}
        <div className="mt-4 text-center text-sm">
          Remember your password?{" "}
          <Link href="/login" passHref>
            <p className="underline">Sign in</p>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
