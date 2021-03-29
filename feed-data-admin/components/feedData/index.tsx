import React from 'react'
import { Card, Button, Row, Col, Alert } from 'antd'

const FeedData = () => {
  return (
    <>
      <Card title="">
        <Row gutter={16}>
          <Col span={24} className="text-right">
            <Button type={'primary'}>
              Run Data Feed
            </Button>
            <Alert message="Data feed started successfully, please check the result later." type="success" />
            <Alert message="Sorry, data feed failed with error, please contact the administrator." type="error" />
          </Col>
        </Row>
      </Card>
    </>
  )
}

export default FeedData
