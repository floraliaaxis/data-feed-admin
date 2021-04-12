import React from 'react'
import Link from 'next/link'
import { Menu } from 'antd'

interface Props {
  activeKey: string
}

const MenuCon = ({ activeKey }: Props) => {
  return (
    <Menu selectedKeys={[activeKey]} theme="dark">
      <Menu.Item key="1">
        <Link href="/">Dashboard</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link href="/feedJobHistory">Feed Job History</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link href="/scheduler">Scheduler Setting</Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Link href="/user">User Management</Link>
      </Menu.Item>
      <Menu.Item key="5">
        <Link href="/troubleShooting">Trouble Shooting</Link>
      </Menu.Item>
    </Menu>
  )
}

export default MenuCon
