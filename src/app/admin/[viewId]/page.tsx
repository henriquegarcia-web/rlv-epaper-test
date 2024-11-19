'use client'

import { IView, viewsData } from '@/data/views'

interface IViewProps {
  params: {
    viewId: string
  }
}

export default function View({ params }: IViewProps) {
  const getComponentByViewId = (viewId: string) => {
    const mainMenuView = viewsData.find(
      (view: IView) => view.viewPath === viewId
    )

    if (mainMenuView) {
      return mainMenuView.viewComponent
    }

    return <div>View not found</div>
  }

  const viewComponent = getComponentByViewId(params.viewId)

  return <div className="">{viewComponent}</div>
}
