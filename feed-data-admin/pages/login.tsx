import React from 'react'
import { Layout } from 'antd'
import AnonymousHeader from '../components/header/anonymousHeader'
import Login from '../components/login'

const LoginPage = () => {
  const { Content } = Layout
  return (
    <>
      <Layout>
        <AnonymousHeader />
        <Content>
          <Login />
        </Content>
      </Layout>
    </>
  )
}

export default LoginPage
