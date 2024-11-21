'use client'

import { useRef } from 'react'
import { LuX } from 'react-icons/lu'

import { Separator } from '@/components'
import useScrollbar from '@/hooks/useScrollbar'
import { cn } from '@/lib/utils'

interface IDrawerProps {
  title: string
  legend: string
  isDrawerOpen: boolean
  handleCloseDrawer: () => void
  children: React.ReactNode
}

const Drawer: React.FC<IDrawerProps> = ({
  title,
  legend,
  isDrawerOpen,
  handleCloseDrawer,
  children
}) => {
  const drawerContentRef = useRef(null)

  const [containerHasScrollbar] = useScrollbar(drawerContentRef)

  return (
    <div
      className={cn(
        '!z-[150] fixed top-0 right-0 flex flex-col gap-[10px] w-admin-filterdrawer-open h-screen p-[20px] border-r border-r-border-primary bg-foreground transition-all duration-200',
        {
          'right-[-390px]': !isDrawerOpen,
          'right-0': isDrawerOpen
        }
      )}
    >
      <div className="flex justify-between">
        <div className="flex flex-col gap-[5px]">
          <b className="text-[18px] leading-[18px] font-bold text-color-secondary">
            {title}
          </b>
          <p className="text-[14px] leading-[17px] text-color-legend">
            {legend}
          </p>
        </div>
        <div className="flex">
          <button
            className="flex justify-center items-center w-[22px] h-[22px] cursor-pointer [&_svg]:size-[18px] [&_svg]:shrink-0 [&_svg]:text-color-secondary"
            onClick={handleCloseDrawer}
          >
            <LuX />
          </button>
        </div>
      </div>
      <Separator className="!my-[10px]" />
      <div className="flex w-ful" style={{ height: 'calc(100vh - 145px)' }}>
        <div
          ref={drawerContentRef}
          className={cn('flex w-full overflow-auto', {
            'pr-[6px]': containerHasScrollbar
          })}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export default Drawer
