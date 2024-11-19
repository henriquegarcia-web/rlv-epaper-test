import { HiOutlineChartPie } from 'react-icons/hi'
import { DocumentsView } from '@/views'

export interface IView {
  viewId: string
  viewPath: string
  viewLabel: string
  viewComponent: React.ReactNode
  viewIcon: React.ReactNode
  viewActive: boolean
  viewVisible: boolean
}

const viewsData: IView[] = [
  {
    viewId: 'view_documents',
    viewPath: 'documentos',
    viewLabel: 'Documentos',
    viewComponent: <DocumentsView />,
    viewIcon: <HiOutlineChartPie />,
    viewActive: true,
    viewVisible: true
  }
]

export { viewsData }
