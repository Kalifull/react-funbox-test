import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://63c70aaddcdc478e15ce725a.mockapi.io' }),
  endpoints: (builder) => ({
    fetchProducts: builder.query({
      query: () => `/items`,
    }),
  }),
});

export const { useFetchProductsQuery } = productApi;

export default productApi;
