import React from 'react'
import { Layout } from 'antd'
import AnonymousHeader from '../components/header/anonymousHeader'
import ResetPassword from '../components/resetPwd'

const resetPwd = () => {
  const { Content } = Layout
  return (
    <>
      <Layout>
        <AnonymousHeader />
        <Content>
          <ResetPassword />
        </Content>
      </Layout>
    </>
  )
}

export default resetPwd
