import { LuBell, LuBellDot } from 'react-icons/lu'

interface INotificationsProps {}

const Notifications: React.FC<INotificationsProps> = ({}) => {
  const hasNotifications = false

  return (
    <div className="flex justify-center items-center w-[40px] h-[40px]">
      {hasNotifications ? (
        <LuBellDot className="text-[24px] text-color-primary" />
      ) : (
        <LuBell className="text-[24px] text-color-primary" />
      )}
    </div>
  )
}

export default Notifications
