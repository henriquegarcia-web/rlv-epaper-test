import { LuChevronDown } from 'react-icons/lu'

import { Avatar } from '@/components'

interface IUserMenuProps {}

const UserMenu: React.FC<IUserMenuProps> = ({}) => {
  const userName = 'Henrique Garcia'
  const userOrganization = 'Organização'

  return (
    <div className="flex items-center gap-[10px] p-[8px] rounded-[4px] border border-border-primary cursor-pointer">
      <Avatar name={userName} />
      <div className="flex flex-col">
        <b className="text-[14px] leading-[14px] text-color-primary">
          {userName}
        </b>
        <p className="text-[12px] leading-[12px] text-color-legend">
          {userOrganization}
        </p>
      </div>
      <div className="ml-[5px]">
        <LuChevronDown />
      </div>
    </div>
  )
}

export default UserMenu
