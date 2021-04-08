import React from 'react'
import { Button, Row, Col, Alert, Divider, Space } from 'antd'

const FeedData = () => {
  return (
    <>
      <p className="mb-8">
        View the latest runing full feed job detail. You can cancel the running
        job & run data feed manually.
      </p>
      <Divider />
      <Alert
        message="Data feed started successfully, please check the result later."
        type="success"
      />
      <Alert
        message="Sorry, data feed failed with error, please contact the administrator."
        type="error"
      />
      <Row justify={'space-between'}>
        <Col>
          <Space>
            <strong>Next Execution Time:</strong>
            <span>07:21:00 08/23/2020</span>
          </Space>
        </Col>
        <Col>
          If you want to run data feed right now, click{' '}
          <Button type={'link'} className="p-0">
            Run Data Feed
          </Button>{' '}
          to start now.
        </Col>
      </Row>

      <Divider className="mtb-8" />
    </>
  )
}

export default FeedData
