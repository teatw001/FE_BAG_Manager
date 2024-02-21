import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const KThuocsAPI = createApi({
  reducerPath: "KThuocs",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/admin/san-pham/quan-ly-kich-co",
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
  tagTypes: ["KThuoc"],
  endpoints: (builder) => ({
    fetchKThuoc: builder.query<any[], void>({
      query: () => "/list",
      providesTags: ["KThuoc"],
    }),
    getKThuocById: builder.query<any, number | string>({
      query: (id) => `/detail/${id}`,
      providesTags: ["KThuoc"],
    }),
    removeKThuoc: builder.mutation({
      query: (id) => ({
        url: "/delete/" + id,
        method: "DELETE",
      }),
      invalidatesTags: ["KThuoc"],
    }),
    addKThuoc: builder.mutation({
      query: (KThuoc: any) => ({
        url: "/create/",
        method: "POST",
        body: KThuoc,
      }),
      invalidatesTags: ["KThuoc"],
    }),
    updateKThuoc: builder.mutation({
      query: (KThuoc: any) => ({
        url: `/update/${KThuoc.id}`,
        method: "PATCH",
        body: KThuoc,
      }),
      invalidatesTags: ["KThuoc"],
    }),
  }),
});
export const {
  useAddKThuocMutation,
  useFetchKThuocQuery,
  useGetKThuocByIdQuery,
  useRemoveKThuocMutation,
  useUpdateKThuocMutation,
} = KThuocsAPI;
export default KThuocsAPI;
