import { baseApi } from "./baseApi";

const courseApi = baseApi.injectEndpoints({
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

export const { useGetCourseQuery } = courseApi;
