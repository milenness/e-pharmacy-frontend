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
import { useCartStore } from "@/store/cartStore";
import toast from "react-hot-toast";

export default function CartClient() {
  const { isLoggedIn, user } = useAuthStore();
  const { fetchCart, checkout } = useCartStore();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    if (isLoggedIn) {
      fetchCart();
    }
  }, [isLoggedIn, fetchCart]);

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
        enableReinitialize
        initialValues={{
          username: user?.name || "",
          email: user?.email || "",
          phone: "",
          address: "",
          paymentMethod: "Cash On Delivery" as "Cash On Delivery" | "Bank",
        }}
        onSubmit={async (values, { resetForm }) => {
          try {
            await checkout({
              name: values.username,
              email: values.email,
              phone: values.phone,
              address: values.address,
              paymentMethod: values.paymentMethod,
            });
            toast.success("Order placed successfully!");
            resetForm();
          } catch {
            toast.error("Failed to place order.");
          }
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
