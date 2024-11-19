'use client'

import { ViewsProvider } from '@/contexts/ViewsProvider'

export function AdminProviders({ children }: { children: React.ReactNode }) {
  return <ViewsProvider>{children}</ViewsProvider>
}
