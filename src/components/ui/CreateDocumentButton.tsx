import { Plus } from 'lucide-react'

import { Button, Modal } from '@/components'
import { useViews } from '@/contexts/ViewsProvider'

interface ICreateButtonProps {}

const CreateButton: React.FC<ICreateButtonProps> = ({}) => {
  const { isCreateDocModalOpen, handleToggleCreateDocModal } = useViews()

  return (
    <>
      <Button
        type="button"
        variant="primary"
        size="primary"
        className="hidden sm:flex"
        onClick={handleToggleCreateDocModal}
      >
        <Plus />
        Novo documento
      </Button>
      <Button
        type="button"
        variant="circle"
        size="circle"
        className="fixed sm:hidden bottom-[80px] right-[25px]"
        onClick={handleToggleCreateDocModal}
      >
        <Plus />
      </Button>

      <Modal
        title="Criar novo documento"
        legend="Insira os dados necessários para criar"
        isModalOpen={isCreateDocModalOpen}
        handleCloseModal={handleToggleCreateDocModal}
      >
        <div></div>
      </Modal>
    </>
  )
}

export default CreateButton
