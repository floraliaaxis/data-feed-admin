import React from 'react'
import { Button, Form, Input, Space, Modal, Row } from 'antd'

const layout = {
  labelCol: { span: 7 },
  wrapperCol: { span: 17 }
}

const tailLayout = {
  wrapperCol: { offset: 7, span: 17 }
}

interface Props {
  isModalVisible: boolean
  setIsModalVisible: any
}

const ChangePassword = ({ isModalVisible, setIsModalVisible }: Props) => {
  return (
    <>
      <Modal
        title="Change Password"
        visible={isModalVisible}
        onCancel={() => {
          setIsModalVisible(false)
        }}
        footer={null}
        width={600}
      >
        <Form name="changePassword" {...layout}>
          <Form.Item
            label="New Password"
            name="newPassword"
            rules={[
              { required: true, message: 'Please input your new password!' }
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            rules={[
              {
                required: true,
                message: 'Please input your confirm password!'
              }
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Row justify={'end'} className="mt-16">
              <Space>
                <Button
                  onClick={() => {
                    setIsModalVisible(false)
                  }}
                >
                  Cancel
                </Button>
                <Button type="primary" htmlType="submit">
                  Save
                </Button>
              </Space>
            </Row>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default ChangePassword
