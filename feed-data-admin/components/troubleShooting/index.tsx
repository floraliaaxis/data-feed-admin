import { Card, Row, Col, Form, Input, Divider, Select, Button } from 'antd'
import React from 'react'
import { PrinterOutlined } from '@ant-design/icons'

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 }
}

const TroubleShooting = () => {
  const { Option } = Select

  return (
    <>
      <Card title="Trouble Shooting">
        <p className="mb-8">To trouble shooting the data, you can print xml.</p>
        <Divider />
        <Form {...layout} name="searchUserForm">
          <Row gutter={16}>
            <Col span={9}>
              <Form.Item label="XML Type" name="xmlType" rules={[]}>
                <Select defaultValue="categoryXML">
                  <Option value="categoryXML">Category XML</Option>
                  <Option value="productXML">Product XML</Option>
                  <Option value="assetXML">Asset XML</Option>
                  <Option value="attributeXML ">Attribute XML</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={9}>
              <Form.Item label="ID" name="id" rules={[]}>
                <Input />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={9} offset={9}>
              <Row justify={'end'}>
                <Button type={'primary'}>
                  <PrinterOutlined />
                  Print XML
                </Button>
              </Row>
            </Col>
          </Row>
        </Form>
      </Card>
    </>
  )
}

export default TroubleShooting
