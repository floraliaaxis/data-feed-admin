import React from 'react'
import { Layout } from 'antd'
import HeaderCon from '../components/header'
import SearchJob from '../components/searchJob'

import Menu from '../components/menu'

export default function Home() {
  const { Content, Sider } = Layout

  return (
    <Layout>
      <HeaderCon />
      <Layout style={{ minHeight: 'calc(100vh - 80px)' }}>
        <Sider>
          <Menu activeKey={'2'} />
        </Sider>
        <Layout>
          <Content>
            <SearchJob />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}
