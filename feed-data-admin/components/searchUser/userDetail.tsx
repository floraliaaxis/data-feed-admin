import { Form, Input, Radio, Button, Space, Modal, Row } from 'antd'
import React from 'react'

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 }
}

interface Props {
  isModalVisible: boolean
  setIsModalVisible: any
}

const UserDetail = ({ isModalVisible, setIsModalVisible }: Props) => {
  const roleOptions = [
    { label: 'Administrator', value: 'admin' },
    { label: 'Read Only', value: 'readOnly' }
  ]

  return (
    <>
      <Modal
        title="User"
        visible={isModalVisible}
        onCancel={() => {
          setIsModalVisible(false)
        }}
        footer={null}
      >
        <Form name="userForm" {...layout}>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="User Role"
            name="role"
            rules={[{ required: true, message: '' }]}
          >
            <Radio.Group options={roleOptions} defaultValue={'admin'} />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input type={'email'} />
          </Form.Item>
          <Row className={'mt-30'} justify={'end'}>
            <Space>
              <Button
                onClick={() => {
                  setIsModalVisible(false)
                }}
              >
                Cancel
              </Button>
              <Button type={'primary'} htmlType={'submit'}>
                Save
              </Button>
            </Space>
          </Row>
        </Form>
      </Modal>
    </>
  )
}

export default UserDetail
