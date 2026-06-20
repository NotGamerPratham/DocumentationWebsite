import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Header } from './Header'
import { Sidebar } from './Sidebar'

export function DocsLayout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <aside className="hidden lg:block fixed left-0 top-16 z-30 h-[calc(100vh-4rem)] w-64 border-r bg-sidebar">
          <Sidebar />
        </aside>
        <main className="flex-1 lg:pl-64">
          <div className="mx-auto max-w-3xl px-4 py-8 lg:px-8 lg:py-12">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}
