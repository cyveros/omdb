import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { OMDB_API_KEY } from '../../config'
import type { Media } from '../types'

export const searchApi = createApi({
  reducerPath: 'search',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.omdbapi.com',
  }),
  endpoints: build => ({
    search: build.query<Media | undefined, string>({
      query: terms => ({
        url: '/',
        params: {
          t: terms,
          apiKey: OMDB_API_KEY,
        },
      }),
      transformResponse: (response: Media & { Response: string }) =>
        response.Response === 'True' ? response : undefined,
    }),
  }),
})
