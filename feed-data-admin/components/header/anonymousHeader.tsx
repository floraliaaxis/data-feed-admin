import React from 'react'
import Link from 'next/link'
import { Layout, Image, Row } from 'antd'

const AnonymousHeader = () => {
  const { Header } = Layout
  return (
    <>
      <Header>
        <Row align={'middle'} justify={'center'}>
          <Link href="/login">
            <Image
              src="/assets/ferguson-logo.svg"
              alt="Ferguson"
              preview={false}
              width={230}
              height={30}
            />
          </Link>
        </Row>
      </Header>
    </>
  )
}

export default AnonymousHeader
