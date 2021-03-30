import React, { useState } from 'react'
import { Card, Button, Row, Col, Table, Form, Input, Space, Select } from 'antd'
import UserDetail from './userDetail'
import ConfirmModal from '../modal/confirm'

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 }
}

const tailLayout = {
  wrapperCol: { offset: 6, span: 18 }
}

const { Option } = Select

const SearchJob = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState<boolean>(
    false
  )
  const dataSource = [
    {
      key: '1',
      userName: 'test001',
      email: 'fsd@fg.com',
      role: 'Administrator',
      created: '08/23/2020'
    },
    {
      key: '2',
      userName: 'test002',
      email: 'fsd2@fg.com',
      role: 'Read Only',
      created: '08/23/2020'
    },
    {
      key: '3',
      userName: 'test003',
      email: 'fsd3@fg.com',
      role: 'Administrator',
      created: '08/23/2020'
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
      render: () => {
        return (
          <Space>
            <Button
              type="link"
              className="p-0"
              onClick={() => {
                setIsDeleteModalVisible(true)
              }}
            >
              Delete
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
      <Card title="">
        <Form {...layout} name="searchUserForm">
          <Row gutter={16} align={'bottom'}>
            <Col span={9}>
              <Form.Item label="User Name" name="userName" rules={[]}>
                <Input />
              </Form.Item>
              <Form.Item label="Email" name="email" rules={[]}>
                <Input type={'email'} />
              </Form.Item>
              <Form.Item label="User Role" name="role" rules={[]}>
                <Select defaultValue="all">
                  <Option value="all">All</Option>
                  <Option value="admin">Administrator</Option>
                  <Option value="readOnly">Read Only</Option>
                </Select>
              </Form.Item>
              <Form.Item {...tailLayout}>
                <Button type={'primary'}>Search User</Button>
              </Form.Item>
            </Col>
            <Col span={15} className="text-right">
              <Button
                type={'primary'}
                onClick={() => {
                  setIsModalVisible(true)
                }}
              >
                Create User
              </Button>
            </Col>
          </Row>
        </Form>
        {isModalVisible}
        <Table dataSource={dataSource} columns={columns} className="mt-30" />
        <UserDetail
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        />
        <ConfirmModal
          isModalVisible={isDeleteModalVisible}
          setIsModalVisible={setIsDeleteModalVisible}
          message={'Delete the user account'}
        />
      </Card>
    </>
  )
}

export default SearchJob
