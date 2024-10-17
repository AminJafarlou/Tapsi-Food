import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import { ReactElement } from 'react'
  
  const queryClient = new QueryClient()
  
  export default function GlobalProvider({children}: {children: ReactElement}) {
    return (
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    )
  }