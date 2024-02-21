import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const categorysAPI = createApi({
  reducerPath: "cates",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/admin/san-pham/quan-ly-danh-muc",
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
  
  tagTypes: ["category"],
  endpoints: (builder) => ({
    fetchCate: builder.query<any[], void>({
      query: () => "/list",
      providesTags: ["category"],
    }),
    getCateById: builder.query<any, number | string>({
      query: (id) => `/detail/${id}`,
      providesTags: ["category"],
    }),
    removeCate: builder.mutation({
      query: (id) => ({
        url: "/delete/" + id,
        method: "DELETE",
      }),
      invalidatesTags: ["category"],
    }),
    addCate: builder.mutation({
      query: (category: any) => ({
        url: "/create/",
        method: "POST",
        body: category,
      }),
      invalidatesTags: ["category"],
    }),
    updateCate: builder.mutation({
      query: (category: any) => ({
        url: `/update/${category.id}`,
        method: "PATCH",
        body: category,
      }),
      invalidatesTags: ["category"],
    }),
  }),
});
export const {
  useAddCateMutation,
  useFetchCateQuery,
  useGetCateByIdQuery,
  useRemoveCateMutation,
  useUpdateCateMutation,
} = categorysAPI;
export default categorysAPI;
