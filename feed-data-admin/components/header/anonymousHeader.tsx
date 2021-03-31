import React from 'react'
import Link from 'next/link'
import { Layout, Image } from 'antd'

const AnonymousHeader = () => {
  const { Header } = Layout
  return (
    <>
      <Header>
        <Link href="/login">
          <Image
            src="/assets/ferguson-logo.svg"
            alt="Ferguson"
            preview={false}
            width={230}
            height={30}
          />
        </Link>
      </Header>
    </>
  )
}

export default AnonymousHeader
