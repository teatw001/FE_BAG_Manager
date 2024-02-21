import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const colorsAPI = createApi({
  reducerPath: "Colors",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/admin/san-pham/quan-ly-mau-sac",
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
  tagTypes: ["color"],
  endpoints: (builder) => ({
    fetchColor: builder.query<any[], void>({
      query: () => "/list",
      providesTags: ["color"],
    }),
    getColorById: builder.query<any, number | string>({
      query: (id) => `/detail/${id}`,
      providesTags: ["color"],
    }),
    removeColor: builder.mutation({
      query: (id) => ({
        url: "/delete/" + id,
        method: "DELETE",
      }),
      invalidatesTags: ["color"],
    }),
    addColor: builder.mutation({
      query: (color: any) => ({
        url: "/create/",
        method: "POST",
        body: color,
      }),
      invalidatesTags: ["color"],
    }),
    updateColor: builder.mutation({
      query: (color: any) => ({
        url: `/update/${color.id}`,
        method: "PATCH",
        body: color,
      }),
      invalidatesTags: ["color"],
    }),
  }),
});
export const {
  useAddColorMutation,
  useFetchColorQuery,
  useGetColorByIdQuery,
  useRemoveColorMutation,
  useUpdateColorMutation,
} = colorsAPI;
export default colorsAPI;
