/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "./baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //create user
    createUser: build.mutation({
      query: (data) => {
        return {
          url: `/users/create`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Auth"],
    }),
    // verify user
    verifyUser: build.mutation({
      query: (data) => {
        return {
          url: "/auth/verify-otp",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Auth"],
    }),
    // login user
    loginUser: build.mutation({
      query: (data) => {
        return {
          url: "/auth/login",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Auth"],
    }),
    // forgot password
    forgotPassword: build.mutation({
      query: (data) => {
        return {
          url: "/auth/forgot-password",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Auth"],
    }),
  }),
});

export const {
  useCreateUserMutation,
  useVerifyUserMutation,
  useLoginUserMutation,
  useForgotPasswordMutation,
} = authApi;
