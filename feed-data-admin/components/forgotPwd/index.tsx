import { Input, Form, Button, Row, Col } from 'antd'
import React from 'react'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 12 }
}

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
}

const ForgotPwd = () => {
  return (
    <div className="mt-80">
      <Row>
        <Col span={10} offset={7}>
          <Form {...layout} name="forgotPwdForm">
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: 'Please input your email!' }]}
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
