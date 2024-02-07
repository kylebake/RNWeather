import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'

const testClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      gcTime: 0,
    },
    mutations: {
      retry: false,
      gcTime: 0,
    },
  },
})
const wrapper = ({ children }) => (
  <QueryClientProvider client={testClient}>{children}</QueryClientProvider>
)

export const TestQueryHelper = {
  wrapper,
}
