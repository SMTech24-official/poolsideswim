/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "./baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //create user
    createUser: build.mutation({
      query: (data: any) => {
        return {
          url: `/users/create`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Auth"],
    }),
  }),
});

export const { useCreateUserMutation } = authApi;
