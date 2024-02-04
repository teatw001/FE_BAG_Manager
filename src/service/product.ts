import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { api } from "../config/config";

const productsAPI = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: `${api}`,
  }),
  tagTypes: ["product"],
  endpoints: (builder) => ({
    fetchProducts: builder.query<any[], void>({
      query: () => "/san-pham/quan-ly-san-pham/list",
      providesTags: ["product"],
    }),
    getProductById: builder.query<any, number | string>({
      query: (id) => `/quan-ly-san-pham/detail/${id}`,
      providesTags: ["product"],
    }),
    // removeProduct: builder.mutation({
    //   query: (id) => ({
    //     url: "/time/" + id,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["product"],
    // }),
    // addProduct: builder.mutation({
    //   query: (time: any) => ({
    //     url: "/time/",
    //     method: "POST",
    //     body: time,
    //   }),
    //   invalidatesTags: ["product"],
    // }),
    // updateProduct: builder.mutation({
    //   query: (time: any) => ({
    //     url: `/time/${time.id}`,
    //     method: "PATCH",
    //     body: time,
    //   }),
    //   invalidatesTags: ["product"],
    // }),
  }),
});
export const { useFetchProductsQuery, useGetProductByIdQuery } = productsAPI;
export default productsAPI;
