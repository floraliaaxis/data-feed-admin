import React from 'react'
import { PageHeader, Button } from 'antd'

const Header = () => {
  return (
        <>
            <PageHeader title="Dashboard" extra={[
                <span className="text-white" key="UserName">Admin</span>,
                <Button key="2">Logout</Button>
            ]} />
            <style jsx>{`
            `}</style>
        </>
  )
}

export default Header
