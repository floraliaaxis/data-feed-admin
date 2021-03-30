import React from 'react'
import { Layout } from 'antd'
import HeaderCon from '../components/header'
import FeedData from '../components/feedData'
import SearchJob from '../components/searchJob'

import ChangePassword from '../components/changePwd'
import Menu from '../components/menu'

export default function Home() {
  const { Content, Sider } = Layout

  return (
    <Layout>
      <HeaderCon title={'Dashboard'} />
      <Layout>
        <Sider>
          <Menu activeKey={'1'} />
        </Sider>
        <Layout>
          <Content>
            <FeedData />
            <SearchJob />
            <ChangePassword />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}
