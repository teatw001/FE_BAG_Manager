import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const LogosAPI = createApi({
  reducerPath: "Logos",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/admin/san-pham/quan-ly-thuong-hieu",
    prepareHeaders: (headers) => {
      // Add your authorization header here
      const user = JSON.parse(localStorage.getItem("user") as any);

      // console.log((user as any)?.token);

      if ((user as any)?.token) {
        headers.set("Authorization", `Bearer ${(user as any)?.token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Logo"],
  endpoints: (builder) => ({
    fetchLogo: builder.query<any[], void>({
      query: () => "/list",
      providesTags: ["Logo"],
    }),
    getLogoById: builder.query<any, number | string>({
      query: (id) => `/detail/${id}`,
      providesTags: ["Logo"],
    }),
    removeLogo: builder.mutation({
      query: (id) => ({
        url: "/delete/" + id,
        method: "DELETE",
      }),
      invalidatesTags: ["Logo"],
    }),
    addLogo: builder.mutation({
      query: (Logo: any) => ({
        url: "/create/",
        method: "POST",
        body: Logo,
      }),
      invalidatesTags: ["Logo"],
    }),
    updateLogo: builder.mutation({
      query: (Logo: any) => ({
        url: `/update/${Logo.id}`,
        method: "PATCH",
        body: Logo,
      }),
      invalidatesTags: ["Logo"],
    }),
  }),
});
export const {
  useAddLogoMutation,
  useFetchLogoQuery,
  useGetLogoByIdQuery,
  useRemoveLogoMutation,
  useUpdateLogoMutation,
} = LogosAPI;
export default LogosAPI;
