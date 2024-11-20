import { LuInfo } from 'react-icons/lu'

interface IBoxInformationProps {
  info: string
}

const BoxInformation: React.FC<IBoxInformationProps> = ({ info }) => {
  return (
    <div className="flex gap-[12px] p-[15px] rounded-[6px] border border-border-primary [&_svg]:size-[18px] [&_svg]:shrink-0 [&_svg]:text-color-secondary">
      <LuInfo />
      <span className="flex flex-1 text-[14px] leading-[18px] text-color-legend">
        {info}
      </span>
    </div>
  )
}

export default BoxInformation
