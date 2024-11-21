import { Plus } from 'lucide-react'

import { Button } from '@/components'

interface ICreateButtonProps {
  label: string
  onClick: () => void
}

const CreateButton: React.FC<ICreateButtonProps> = ({ label, onClick }) => {
  return (
    <>
      <Button
        type="button"
        variant="primary"
        size="primary"
        className="hidden sm:flex"
        onClick={onClick}
      >
        <Plus />
        {label}
      </Button>
      <Button
        type="button"
        variant="circle"
        size="circle"
        className="fixed sm:hidden bottom-[80px] right-[25px]"
        onClick={onClick}
      >
        <Plus />
      </Button>
    </>
  )
}

export default CreateButton
