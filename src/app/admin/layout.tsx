import { Footer, Header, SideMenu } from '@/components'

import { AdminProviders } from './providers'

export default function AdminLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <AdminProviders>
        <main className="flex flex-col items-end w-screen h-scren">
          <Header />
          <SideMenu />
          <div className="flex flex-col w-admin-content h-admin-content">
            <section className="flex w-full h-admin-view">{children}</section>
            <Footer />
          </div>
        </main>
      </AdminProviders>
    </>
  )
}
