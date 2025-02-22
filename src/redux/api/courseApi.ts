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
    // get signle course
    getSingleCourseById: build.query({
      query: (id) => {
        return {
          url: `/courses/${id}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetCourseQuery, useGetSingleCourseByIdQuery } = courseApi;
