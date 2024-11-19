import { Logo } from '@/components'

interface IFooterProps {}

const Footer: React.FC<IFooterProps> = ({}) => {
  return (
    <footer className="flex justify-center items-center gap-[10px] w-full h-admin-footer bg-footer border-t border-t-border-primary">
      <Logo type="mono" />
      <span className="text-[14px] text-color-legend">
        Copyright © 2024 e-paper
      </span>
    </footer>
  )
}

export default Footer
