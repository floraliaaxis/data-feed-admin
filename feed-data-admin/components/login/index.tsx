import { Input, Form, Button, Row, Col } from 'antd'
import Link from 'next/link'
import React from 'react'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 12 }
}

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
}

const Login = () => {
  return (
        <div className="loginForm">
            <Row>
                <Col span={10} offset={7}>
                    <Form
                        {...layout}
                        name='loginForm'
                    >
                        <Form.Item
                            label='Username'
                            name='username'
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input/>
                        </Form.Item>
                        <Form.Item
                            label='Password'
                            name='password'
                            rules={[{ required: true, message: 'Please input your password!' }]}
                            className="mb-0"
                        >
                            <Input.Password/>
                        </Form.Item>
                        <Form.Item {...tailLayout}>
                            <Link href="/">
                                <a>Forgot Password?</a>
                            </Link>
                        </Form.Item>
                        <Form.Item {...tailLayout}>
                            <Button type='primary' htmlType='submit'>
                                Login
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
            <style jsx>{`
              .loginForm {
                margin-top: 80px;
              }
            `}</style>
        </div>
  )
}

export default Login
