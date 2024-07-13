type LayoutType = 'vertical' | 'classic' | 'transverse' | 'columns'

export interface SystemState {
  layout: LayoutType
  sideBar: {
    isCollapse: boolean
  }
}
