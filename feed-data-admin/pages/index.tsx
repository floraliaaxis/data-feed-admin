import React from 'react'
import { Layout } from 'antd'
import HeaderCon from '../components/header'
import FeedData from '../components/feedData'
import SearchJob from '../components/searchJob'
import UserManagement from '../components/userManagement'
import ChangePassword from '../components/changePwd'

export default function Home() {
  const { Content } = Layout

  return (
    <Layout>
      <HeaderCon />
      <Content>
        <FeedData />
        <SearchJob />
        <UserManagement />
        <ChangePassword />
      </Content>
    </Layout>
  )
}
