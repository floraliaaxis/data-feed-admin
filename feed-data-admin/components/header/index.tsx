import React from 'react'
import { PageHeader, Button } from 'antd'

interface Props {
  title: string
}

const Header = ({ title }: Props) => {
  return (
    <>
      <PageHeader
        title={title}
        extra={[
          <span className="text-white" key="UserName">
            Admin
          </span>,
          <Button key="2">Logout</Button>
        ]}
      />
      <style jsx>{''}</style>
    </>
  )
}

export default Header
