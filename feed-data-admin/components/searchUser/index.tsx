import React, { useState } from 'react'
import { Card, Button, Row, Col, Table, Form, Input, Space } from 'antd'
import UserDetail from './userDetail'

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 }
}

const SearchJob = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)

  const dataSource = [
    {
      key: '1',
      userName: 'test001',
      email: 'fsd@fg.com',
      role: 'Administrator',
      created: '08/23/2020',
      enalbe: true
    },
    {
      key: '2',
      userName: 'test002',
      email: 'fsd2@fg.com',
      role: 'Read Only',
      created: '08/23/2020',
      enalbe: true
    },
    {
      key: '3',
      userName: 'test003',
      email: 'fsd3@fg.com',
      role: 'Administrator',
      created: '08/23/2020',
      enalbe: false
    }
  ]

  const columns = [
    {
      title: 'User Name',
      dataIndex: 'userName',
      key: 'userName'
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: 'User Role',
      dataIndex: 'role',
      key: 'role'
    },
    {
      title: 'Created',
      dataIndex: 'created',
      key: 'created'
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      // eslint-disable-next-line react/display-name
      render: (text, row) => {
        return (
          <Space>
            <Button type="link" className="p-0">
              {row.enalbe ? 'Enable' : 'Disable'}
            </Button>
            <Button
              type="link"
              className="p-0"
              onClick={() => {
                setIsModalVisible(true)
              }}
            >
              Edit
            </Button>
          </Space>
        )
      }
    }
  ]

  return (
    <>
      <Card title="User Management">
        <Form {...layout} name="searchUserForm">
          <Row gutter={16}>
            <Col span={9}>
              <Form.Item label="User Name" name="userName" rules={[]}>
                <Input />
              </Form.Item>
            </Col>
            <Col span={9}>
              <Form.Item label="Email" name="email" rules={[]}>
                <Input type={'email'} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={9} offset={9}>
              <Row justify={'end'}>
                <Form.Item>
                  <Space size={'large'}>
                    <Button
                      type={'primary'}
                      onClick={() => {
                        setIsModalVisible(true)
                      }}
                    >
                      Create User
                    </Button>
                    <Button type={'primary'}>Search User</Button>
                  </Space>
                </Form.Item>
              </Row>
            </Col>
          </Row>
        </Form>

        <Table dataSource={dataSource} columns={columns} className="mt-30" />
        <UserDetail
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        />
      </Card>
    </>
  )
}

export default SearchJob
