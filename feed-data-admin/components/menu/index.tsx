import React from 'react'
import Link from 'next/link'
import { Menu } from 'antd'

interface Props {
  activeKey: string
}

const MenuCon = ({ activeKey }: Props) => {
  return (
    <Menu selectedKeys={[activeKey]}>
      <Menu.Item key="1">
        <Link href="/">Dashboard</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link href="/user">User Management</Link>
      </Menu.Item>
    </Menu>
  )
}

export default MenuCon
