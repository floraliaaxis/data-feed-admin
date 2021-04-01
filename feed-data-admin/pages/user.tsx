import React from 'react'
import { Layout } from 'antd'
import HeaderCon from '../components/header'
import Menu from '../components/menu'
import SearchUser from '../components/searchUser'

const User = () => {
  const { Content, Sider } = Layout

  return (
    <Layout>
      <HeaderCon />
      <Layout style={{ minHeight: 'calc(100vh - 80px)' }}>
        <Sider>
          <Menu activeKey={'4'} />
        </Sider>
        <Layout>
          <Content>
            <SearchUser />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default User
