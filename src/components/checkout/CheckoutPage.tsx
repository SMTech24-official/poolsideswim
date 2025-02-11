"use client";

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

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

const CheckoutPage = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <div className="container">
      <div className="grid gap-[7px]">
        <h2 className="text-xl font-semibold leading-7 text-black">
          Check Out
        </h2>
        <div className="border-b-[1px] border-[#DBDBDB]"></div>
      </div>
      <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center gap-6">
          <div className="grid gap-6">
            <h2 className="text-black text-[32px] font-bold leading-[38px]">
              Contact
            </h2>
            {/* lessons name */}
            <p className="text-base font-medium leading-[22px] flex items-center gap-4">
              Lessons name:{" "}
              <span className="text-primary">Baby & Toddler Classes</span>
            </p>
            <div className="flex items-center gap-4 w-full">
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
                <div className="flex items-center gap-4 w-full">
                  <div className="grid gap-2">
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
                  <div className="grid gap-2">
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
                    <div className="flex gap-4">
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
            </div>
          </div>
        </div>
        {/* payment method */}
        <div></div>
      </form>
    </div>
  );
};

export default CheckoutPage;
