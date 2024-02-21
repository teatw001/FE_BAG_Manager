import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const usersAPI = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/auth",
  }),
  tagTypes: ["users"],
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (credentials: { userName: string; password: string }) => ({
        url: "/authenticate",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["users"],
    }),
  }),
});
export const { useLoginUserMutation } = usersAPI;

export default usersAPI;
