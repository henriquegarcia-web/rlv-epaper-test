import { FileText } from 'lucide-react'
import { DocumentsView } from '@/views'

export interface IView {
  id: string
  path: string
  label: string
  component: React.ReactNode
  icon: React.ReactNode
  active: boolean
  visible: boolean
}

const viewsData: IView[] = [
  {
    id: 'view_documents',
    path: 'documentos',
    label: 'Documentos',
    component: <DocumentsView />,
    icon: <FileText />,
    active: true,
    visible: true
  }
]

export { viewsData }
