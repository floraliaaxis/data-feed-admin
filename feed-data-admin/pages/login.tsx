import React from 'react'
import { Layout } from 'antd'
import Image from 'next/image'
import Login from '../components/login'

const LoginPage = ()=>{
  const { Header, Content } = Layout
  return (
    <>
      <Layout>
        <Header>
          <Image
            src="/assets/ferguson-logo.svg"
            alt="Ferguson"
            width={230}
            height={30}
          />
        </Header>
        <Content><Login /></Content>
      </Layout>
      <style jsx>{`
        .ant-layout-header {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </>
  )
}

export default LoginPage