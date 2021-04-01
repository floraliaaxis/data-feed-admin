import React from 'react'
import { Layout } from 'antd'
import HeaderCon from '../components/header'
import Menu from '../components/menu'
import Schedular from '../components/schedular'

const Scheduler = () => {
  const { Content, Sider } = Layout

  return (
    <Layout>
      <HeaderCon />
      <Layout style={{ minHeight: 'calc(100vh - 80px)' }}>
        <Sider>
          <Menu activeKey={'3'} />
        </Sider>
        <Layout>
          <Content>
            <Schedular />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default Scheduler
