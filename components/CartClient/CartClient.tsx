"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import css from "@/app/(main)/(private routes)/cart/page.module.css";
import ShippingInfo from "@/components/ShippingInfo";
import PaymentMethod from "@/components/PaymentMethod";
import OrderDetails from "@/components/OrderDetails";
import CartList from "@/components/CartList";
import { Formik, Form } from "formik";
import { useAuthStore } from "@/store/authStore";

export default function CartClient() {
  const { isLoggedIn } = useAuthStore();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && !isLoggedIn) {
      router.replace("/login");
    }
  }, [mounted, isLoggedIn, router]);

  if (!mounted || !isLoggedIn) {
    return null;
  }

  return (
    <div className={css.cartContainer}>
      <Formik
        initialValues={{
          username: "",
          email: "",
          phone: "",
          address: "",
          paymentMethod: "cash",
        }}
        onSubmit={(values) => {
          console.log("Final Order Data:", values);
        }}
      >
        <Form className={css.cartWrapper}>
          <ShippingInfo />
          <PaymentMethod />
          <OrderDetails />
        </Form>
      </Formik>

      <CartList />
    </div>
  );
}
