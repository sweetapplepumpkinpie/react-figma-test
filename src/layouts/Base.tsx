import React from "react"

import { SideMenu } from "components/SideMenu"

interface IProps {
  children?: React.ReactNode
}

export const BaseLayout: React.FC<IProps> = ({ children }) => {
  return (
    <div className='flex'>
      <SideMenu />
      {children}
    </div>
  )
}
