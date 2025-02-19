import { baseApi } from "./baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get courses
    getCourse: build.query({
      query: () => {
        return {
          url: "/courses",
          method: "GET",
        };
      },
      providesTags: ["Course"],
    }),
  }),
});

export const { useGetCourseQuery } = authApi;
