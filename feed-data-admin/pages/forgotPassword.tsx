import React from 'react'
import { Layout } from 'antd'
import AnonymousHeader from '../components/header/anonymousHeader'
import ForgotPwd from '../components/forgotPwd'

const forgotPwd = () => {
  const { Content } = Layout
  return (
    <>
      <Layout>
        <AnonymousHeader />
        <Content>
          <ForgotPwd />
        </Content>
      </Layout>
    </>
  )
}

export default forgotPwd
