'use client'

import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'

import { viewsData } from '@/data/views'

export interface IViewsContextData {
  activeView: string
  handleChangeActiveView: (viewId: string) => void
  isSideMenuOpen: boolean
  handleToggleSideMenu: () => void
}

export const ViewsContext = createContext<IViewsContextData>(
  {} as IViewsContextData
)

function getLastWordFromPath(path: string) {
  const pathParts = path.split('/')
  const lastWord = pathParts[pathParts.length - 1]
  return lastWord
}

const ADMIN_BASE_URL = '/admin/'

const ViewsProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  const pathname = usePathname()

  const [activeView, setActiveView] = useState<string>(viewsData[0].path)
  const [isSideMenuOpen, setIsSideMenuOpen] = useState<boolean>(false)

  const handleToggleSideMenu = () => setIsSideMenuOpen(!isSideMenuOpen)

  const handleChangeActiveView = (viewPath: string) => {
    router.push(ADMIN_BASE_URL + viewPath)
  }

  useEffect(() => {
    setActiveView(getLastWordFromPath(pathname))
  }, [router, pathname])

  const ViewsContextData: IViewsContextData = useMemo(() => {
    return {
      activeView,
      handleChangeActiveView,
      isSideMenuOpen,
      handleToggleSideMenu
    }
  }, [activeView, isSideMenuOpen])

  return (
    <ViewsContext.Provider value={ViewsContextData}>
      {children}
    </ViewsContext.Provider>
  )
}

function useViews(): IViewsContextData {
  const context = useContext(ViewsContext)

  if (!context) throw new Error('useViews must be used within a UserProvider')

  return context
}

export { ViewsProvider, useViews }
