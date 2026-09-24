import { Metadata } from "next";
import RegisterForm from "@/components/RegisterForm";

export const metadata: Metadata = {
  title: "Register",
  description:
    "Create a new E-Pharmacy account to start ordering medicines and finding nearby pharmacies.",
};

export default function RegisterPage() {
  return <RegisterForm />;
}
