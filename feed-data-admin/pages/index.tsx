import React from 'react'
import { Layout, Card } from 'antd'
import HeaderCon from '../components/header'
import FeedData from '../components/feedData'
import Menu from '../components/menu'
import JobDetail from '../components/jobDetail'

export default function Home() {
  const { Content, Sider } = Layout

  return (
    <Layout>
      <HeaderCon />
      <Layout>
        <Sider>
          <Menu activeKey={'1'} />
        </Sider>
        <Layout>
          <Content>
            <FeedData />
            <Card title={'Job Detail'}>
              <JobDetail />
            </Card>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}
