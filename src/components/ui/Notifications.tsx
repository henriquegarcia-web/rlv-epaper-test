import { LuBell, LuBellDot } from 'react-icons/lu'

import { Button } from '@/components'

interface INotificationsProps {}

const Notifications: React.FC<INotificationsProps> = ({}) => {
  const hasNotifications = false

  return (
    <Button variant="icon" size="icon" className="hidden sm:flex">
      {hasNotifications ? <LuBellDot /> : <LuBell />}
    </Button>
  )
}

export default Notifications
