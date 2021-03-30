import React from 'react'
import { Button, Form, Input, Card } from 'antd'

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 }
}

const tailLayout = {
  wrapperCol: { offset: 6, span: 18 }
}

const ChangePassword = () => {
  return (
    <>
      <Card title="Change Password">
        <Form name="changePassword" {...layout} style={{ width: 540 }}>
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
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </>
  )
}

export default ChangePassword
