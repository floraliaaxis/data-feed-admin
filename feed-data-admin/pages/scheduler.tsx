import React from 'react'
import { Layout } from 'antd'
import HeaderCon from '../components/header'
import Menu from '../components/menu'
import Scheduler from '../components/scheduler'

const SchedulerPage = () => {
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
            <Scheduler />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default SchedulerPage
