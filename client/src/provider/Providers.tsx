import React from 'react'
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools"
import { SmoothScrollingProvider } from '../contexts/SmoothScrollingContext';
const queryClinet = new QueryClient()

type ProvidersPropsType = {
  children: React.ReactNode
}

const Providers = ({ children }: ProvidersPropsType) => {
  return (
    <>
      <QueryClientProvider client={queryClinet}>
        <SmoothScrollingProvider>
        {children}
        
        </SmoothScrollingProvider>
        <ReactQueryDevtools initialIsOpen/>
      </QueryClientProvider>
    </>

  )
}

export default Providers