import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'

const client = new QueryClient();
export default function WrapperApp(props) {
  const { children } = props
  return (
    <>
    <QueryClientProvider client={client}>
      <BrowserRouter>
        {children}
      </BrowserRouter>
    </QueryClientProvider>
    </>
  )
}
