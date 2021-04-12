import React from 'react'
import { Layout } from 'antd'
import HeaderCon from '../components/header'
import Menu from '../components/menu'
import TroubleShooting from '../components/troubleShooting'

const User = () => {
  const { Content, Sider } = Layout

  return (
    <Layout>
      <HeaderCon />
      <Layout style={{ minHeight: 'calc(100vh - 80px)' }}>
        <Sider>
          <Menu activeKey={'5'} />
        </Sider>
        <Layout>
          <Content>
            <TroubleShooting />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default User
