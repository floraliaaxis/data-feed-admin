import React from 'react'
import { Layout, Image } from 'antd'

const AnonymousHeader = () => {
  const { Header } = Layout
  return (
    <>
      <Header>
        <Image
          src="/assets/ferguson-logo.svg"
          alt="Ferguson"
          width={230}
          height={30}
        />
      </Header>
    </>
  )
}

export default AnonymousHeader
