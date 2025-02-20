import { baseApi } from "./baseApi";

const contactApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // contact send to email
    sendContact: build.mutation({
      query: (data) => {
        return {
          url: "/contacts",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Contact"],
    }),
  }),
});

export const { useSendContactMutation } = contactApi;
