import React, { useState } from 'react'
import { Layout, Image, Row, Col, Typography, Dropdown, Menu } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import Link from 'next/link'
import ChangePassword from '../changePwd'

const HeaderCon = () => {
  const { Header } = Layout
  const { Title } = Typography
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a
          onClick={() => {
            setIsModalVisible(true)
          }}
        >
          Change Password
        </a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="1">
        <Link href={'/login'}>Log Out</Link>
      </Menu.Item>
    </Menu>
  )

  return (
    <>
      <Header>
        <Row align={'middle'} justify={'space-between'}>
          <Col span={12}>
            <Row gutter={16} align={'middle'}>
              <Col>
                <Image
                  src="/assets/ferguson-logo.svg"
                  alt="Ferguson"
                  preview={false}
                  width={230}
                  height={30}
                  className="d-inherit"
                />
              </Col>
              <Col>
                <Title level={2} className="text-white mb-0">
                  Data Feed Console
                </Title>
              </Col>
            </Row>
          </Col>
          <Col span={12}>
            <Row justify={'end'}>
              <Col>
                <Dropdown overlay={menu} trigger={['click']}>
                  <a
                    className="ant-dropdown-link text-white"
                    onClick={e => e.preventDefault()}
                  >
                    Admin <DownOutlined />
                  </a>
                </Dropdown>
              </Col>
            </Row>
          </Col>
        </Row>
      </Header>
      <ChangePassword
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </>
  )
}

export default HeaderCon
