import { Input, Form, Button, Row, Col, Typography, Divider, Alert } from 'antd'
import React from 'react'

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 }
}

const tailLayout = {
  wrapperCol: { offset: 6, span: 16 }
}

const ResetPassword = () => {
  const { Title, Paragraph } = Typography
  return (
    <div className="mt-80">
      <Row justify={'center'}>
        <Col span={8} style={{ minWidth: 540 }}>
          <Title level={3}>RESET YOUR PASSWORD</Title>
          <Divider className="mt-16" />
          <Paragraph>
            Please enter your new password. After submit successfully, you can
            use your new password to login.
          </Paragraph>
          <Alert
            type="success"
            message={
              'Your password has been updated successfully, click here to dashboard page.'
            }
          />
          <Form {...layout} name="forgotPwdForm">
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: 'Please input your password!' }
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
                Update
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  )
}

export default ResetPassword
