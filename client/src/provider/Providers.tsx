import React from 'react'
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools"

const queryClinet = new QueryClient()

type ProvidersPropsType = {
  children: React.ReactNode
}

const Providers = ({ children }: ProvidersPropsType) => {
  return (
    <>
      <QueryClientProvider client={queryClinet}>
        {children}
        <ReactQueryDevtools initialIsOpen/>
      </QueryClientProvider>
    </>

  )
}

export default Providers