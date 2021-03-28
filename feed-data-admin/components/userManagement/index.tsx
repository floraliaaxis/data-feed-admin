import {Card, Form, Input, Row, Col, Radio, Button} from 'antd'
import React from "react";
const layout = {
    labelCol: {span: 6},
    wrapperCol: {span: 18}
}

const tailLayout = {
    wrapperCol: {offset: 6, span: 18}
}

const UserManagement = () => {

    const roleOptions = [
        { label: 'Administrator', value: 'admin' },
        { label: 'Read Only', value: 'readOnly' }
    ]

    return (
        <>
            <Card title="User Management">
                <Form name="createUser" {...layout}>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item
                                label='Username'
                                name='username'
                                rules={[{required: true, message: 'Please input your username!'}]}
                            >
                                <Input/>
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                label='Password'
                                name='password'
                                rules={[{required: true, message: 'Please input your password!'}]}
                                className="mb-0"
                            >
                                <Input.Password/>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item
                                label='User Role'
                                name='role'
                                rules={[{required: true, message: ''}]}
                            >
                                <Radio.Group options={roleOptions} defaultValue={'admin'}  />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                label='Email'
                                name='email'
                                rules={[{required: true, message: 'Please input your email!'}]}
                            >
                                <Input type={"email"}/>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={8}>
                        <Form.Item {...tailLayout}>
                            <Button type='primary' htmlType='submit'>
                                Crate User
                            </Button>
                        </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Card>
        </>
    )
}

export default UserManagement