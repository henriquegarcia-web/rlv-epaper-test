import { X } from 'lucide-react'

import { Backdrop } from '@/components'
import { cn } from '@/lib/utils'

interface IModalProps {
  title: string
  legend: string
  isModalOpen: boolean
  handleCloseModal: () => void
  children: React.ReactNode
}

const Modal: React.FC<IModalProps> = ({
  title,
  legend,
  isModalOpen,
  handleCloseModal,
  children
}) => {
  return (
    <>
      <div
        className={cn(
          '!z-[150] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full flex flex-col gap-[10px] w-full max-w-[600px] py-[28px] px-[22px] rounded-sm border-r border-r-border-primary bg-foreground transition-all duration-200',
          {
            hidden: !isModalOpen,
            flex: isModalOpen
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
              onClick={handleCloseModal}
            >
              <X />
            </button>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <Backdrop type="dark" handleCloseBackdrop={handleCloseModal} />
      )}
    </>
  )
}

export default Modal
