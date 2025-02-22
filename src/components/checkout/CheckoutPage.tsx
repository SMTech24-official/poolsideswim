"use client";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { SubmitHandler, useForm } from "react-hook-form";
import PaymentMethod from "./PaymentMethod";
import SharedButton from "../shared/SharedButton";
import { useCreatePaymentIntentMutation } from "@/redux/api/paymentApi";
import { useParams } from "next/navigation";
import { useState } from "react";
import { useGetSingleCourseByIdQuery } from "@/redux/api/courseApi";

interface Inputs {
  phone: string;
  email: string;
  country: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
}

const stripePromise = loadStripe(
  "pk_test_51Qh3UWD7tnlYKmLUjngjitMEHTgFxq1tIw7mZ5k5eRXs2PXXr2qBXzR9CsqzHL9vjaqqwDdgfwcZMBpabL0HgQ6L00nIPdG6Gh"
);

const CheckoutPage = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const params = useParams();
  const courseId = params?.id;
  const { data } = useGetSingleCourseByIdQuery(courseId);
  // console.log(data?.data?.title);
  const [createPaymentIntent, { isLoading }] = useCreatePaymentIntentMutation();
  const [clientSecret, setClientSecret] = useState<string | undefined>(
    undefined
  );

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    const formattedData = {
      courseId: courseId,
      currency: "usd",
      billingDetails: {
        firstName: data?.firstName,
        lastName: data?.lastName,
        email: data?.email,
        address: data?.address,
        country: data?.country,
        city: data?.city,
        state: data?.state,
        zipCode: data?.zipCode,
        countryOrRegion: "US",
      },
    };

    try {
      const res = await createPaymentIntent(formattedData).unwrap();
      console.log("Payment Intent Response:", res);
      // console.log(res?.data?.paymentIntent?.client_secret);
      setClientSecret(res?.data?.paymentIntent?.client_secret);
    } catch (error) {
      console.error("Error creating payment intent:", error);
    }
  };

  return (
    <div className="container">
      <div className="grid gap-[7px]">
        <h2 className="text-xl font-semibold leading-7 text-black">
          Check Out
        </h2>
        <div className="border-b-[1px] border-[#DBDBDB]"></div>
      </div>
      <div className="xl:flex items-center gap-6">
        <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-6">
            <h2 className="text-black text-[32px] font-bold leading-[38px]">
              Contact
            </h2>
            {/* lessons name */}
            <p className="text-base font-medium leading-[22px] flex items-center gap-4">
              Crouse name:{" "}
              <span className="text-primary">{data?.data?.title}</span>
            </p>
            <div className="md:flex items-center gap-4 w-full">
              <div className="grid gap-2">
                <label
                  htmlFor="phone"
                  className="font-medium text-base leading-[25px]"
                >
                  Phone *
                </label>
                <input
                  id="phone"
                  type="number"
                  placeholder="(239) 555-0108"
                  {...register("phone", { required: true })}
                  className="px-4 py-[17px] text-gray bg-gray4 rounded-lg"
                />
              </div>
              <div className="grid gap-2">
                <label
                  htmlFor="email"
                  className="font-medium text-base leading-[25px]"
                >
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="lorem@example.com"
                  {...register("email", { required: true })}
                  className="px-4 py-[17px] text-gray bg-gray4 rounded-lg"
                />
              </div>
            </div>
            <div className="grid gap-4">
              <h2 className="text-black font-bold text-[32px] leading-[38px]">
                Billing Information!
              </h2>
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <label
                    htmlFor="country"
                    className="font-medium text-base leading-[25px]"
                  >
                    Country/Region *
                  </label>
                  <select
                    {...register("country")}
                    className="px-4 py-[17px] text-gray bg-gray4 rounded-lg"
                  >
                    <option value="united states">United States</option>
                  </select>
                </div>
                <div className="md:flex items-center gap-4 w-full">
                  <div className="grid gap-2 w-full">
                    <label
                      htmlFor="firstName"
                      className="font-medium text-base leading-[25px]"
                    >
                      First Name *
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      placeholder="Enter your first name"
                      {...register("firstName", { required: true })}
                      className="px-4 py-[17px] text-gray bg-gray4 rounded-lg"
                    />
                  </div>
                  <div className="grid gap-2 w-full">
                    <label
                      htmlFor="lastName"
                      className="font-medium text-base leading-[25px]"
                    >
                      Last Name *
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      placeholder="Enter your last name"
                      {...register("lastName", { required: true })}
                      className="px-4 py-[17px] text-gray bg-gray4 rounded-lg"
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <label
                    htmlFor="Address"
                    className="font-medium text-base leading-[25px]"
                  >
                    Address *
                  </label>
                  <div className="w-full grid gap-4">
                    <input
                      id="address"
                      type="text"
                      placeholder="3891 Ranchview Dr. Richardson, California 62639"
                      {...register("address", { required: true })}
                      className="px-4 py-[17px] text-gray bg-gray4 rounded-lg"
                    />
                    <div className="grid md:flex gap-4">
                      <input
                        id="city"
                        type="text"
                        placeholder="City"
                        {...register("city", { required: true })}
                        className="px-4 py-[17px] text-gray bg-gray4 rounded-lg"
                      />
                      <input
                        id="state"
                        type="text"
                        placeholder="State"
                        {...register("state", { required: true })}
                        className="px-4 py-[17px] text-gray bg-gray4 rounded-lg"
                      />
                      <input
                        id="zipCode"
                        type="number"
                        placeholder="ZIP Code"
                        {...register("zipCode", { required: true })}
                        className="px-4 py-[17px] text-gray bg-gray4 rounded-lg"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid gap-2">
                  <label
                    htmlFor="additionalInformation"
                    className="font-medium text-base leading-[25px]"
                  >
                    Additional Information *
                  </label>
                  <textarea
                    name=""
                    id="additionalInformation"
                    placeholder="Write any information"
                    className="px-4 py-[17px] text-gray bg-gray4 rounded-lg h-[190px]"
                  />
                </div>
              </div>
              {!clientSecret ? (
                <SharedButton
                  type="submit"
                  text="Next"
                  isLoading={isLoading}
                  classes="w-full rounded-lg mt-4"
                />
              ) : (
                ""
              )}
            </div>
          </div>
        </form>
        <div className="w-full">
          {clientSecret && (
            <Elements stripe={stripePromise} options={{ clientSecret }}>
              <PaymentMethod />
            </Elements>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
