import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React from "react";
import SharedButton from "../shared/SharedButton";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const PaymentMethod = () => {
  const router = useRouter();
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: window.location.origin + "/payment-success",
      },
      redirect: "if_required",
    });

    if (error) {
      // Handle error
      toast.error("something went wrong"); // Error message
      console.log(error);
    } else if (paymentIntent?.status === "succeeded") {
      console.log("Payment Successfull:", paymentIntent);
      toast.success("Payment Successfull"); // Success message
      router.push("/");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <SharedButton type="submit" text="Pay" classes="w-full rounded-lg mt-4" />
    </form>
  );
};

export default PaymentMethod;
