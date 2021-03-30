import React from 'react'
import { Layout } from 'antd'
import HeaderCon from '../components/header'
import Menu from '../components/menu'
import SearchUser from '../components/searchUser'

const User = () => {
  const { Content, Sider } = Layout

  return (
    <Layout>
      <HeaderCon title={'User Management'} />
      <Layout>
        <Sider>
          <Menu activeKey={'2'} />
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
