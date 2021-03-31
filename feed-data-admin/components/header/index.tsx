import React from 'react'
import { PageHeader, Button } from 'antd'
import { useRouter } from 'next/router'

interface Props {
  title: string
}

const Header = ({ title }: Props) => {
  const router = useRouter()

  return (
    <>
      <PageHeader
        title={title}
        extra={[
          <span className="text-white" key="UserName">
            Admin
          </span>,
          <Button
            key="2"
            onClick={() => {
              router.push('/login')
            }}
          >
            Logout
          </Button>
        ]}
      />
      <style jsx>{''}</style>
    </>
  )
}

export default Header
