import { baseApi } from "./baseApi";

const paymentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // payment intent create
    createPaymentIntent: build.mutation({
      query: (data) => {
        return {
          url: "/payments/create-payment-intent",
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const { useCreatePaymentIntentMutation } = paymentApi;
