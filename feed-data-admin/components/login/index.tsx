import { Input, Form, Button, Row, Col } from 'antd'
import { useRouter } from 'next/router'
import React from 'react'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 12 }
}

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
}

const Login = () => {
  const router = useRouter()

  return (
    <div className="mt-80">
      <Row>
        <Col span={10} offset={7}>
          <Form
            {...layout}
            name="loginForm"
            onFinish={() => {
              router.push('/')
            }}
            requiredMark={false}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: 'Please input your username!' }
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: 'Please input your password!' }
              ]}
              className="mb-0"
            >
              <Input.Password />
            </Form.Item>
            <Form.Item {...tailLayout} className="text-sm">
              Forget your password? contact the administrator for help.
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Login
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  )
}

export default Login
