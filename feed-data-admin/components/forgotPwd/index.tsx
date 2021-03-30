import { Input, Form, Button, Row, Col, Typography, Divider, Alert } from 'antd'
import React from 'react'

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 }
}

const tailLayout = {
  wrapperCol: { offset: 6, span: 16 }
}

const ForgotPwd = () => {
  const { Title, Paragraph } = Typography
  return (
    <div className="mt-80">
      <Row justify={'center'}>
        <Col span={8} style={{ minWidth: 540 }}>
          <Title level={3}>FORGOT YOUR PASSWORD</Title>
          <Divider className="mt-16" />
          <Paragraph>
            Enter your account Email Address and we&apos;ll send a link to reset
            your password.
          </Paragraph>
          <Alert type="error" message={'The email does not exist.'} />
          <Form {...layout} name="forgotPwdForm" className="mt-30">
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: 'Invalid email address.' }]}
            >
              <Input type={'email'} />
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Forgot Password
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  )
}

export default ForgotPwd
