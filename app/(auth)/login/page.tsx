import { Metadata } from "next";
import LoginForm from "@/components/LoginForm";

export const metadata: Metadata = {
  title: "Login",
  description:
    "Log in to your E-Pharmacy account to manage your orders and healthcare needs.",
};

export default function LoginPage() {
  return <LoginForm />;
}
