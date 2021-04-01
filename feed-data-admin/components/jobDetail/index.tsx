import React from 'react'
import { Row, Col, Space, Table, Progress, Button, Typography } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import { Job } from '../../types/job'

const { Paragraph } = Typography
const JobDetail = () => {
  const dataSource = [
    {
      key: '1',
      step: 'Step1',
      status: 'In Progress',
      dataProcessed: 2323,
      total: 5000,
      percentage: 30
    },
    {
      key: '2',
      step: 'Step2',
      status: 'Complete',
      dataProcessed: 5000,
      total: 5000,
      percentage: 100
    },
    {
      key: '3',
      step: 'Step3',
      status: 'In Progress',
      dataProcessed: 2323,
      total: 5000,
      percentage: 30
    },
    {
      key: '4',
      step: 'Step4',
      status: 'In Progress',
      dataProcessed: 0,
      total: 5000,
      percentage: 0
    },
    {
      key: '5',
      step: 'Step5',
      status: 'In Progress',
      dataProcess: 2323
    }
  ]

  const renderContent = (text, row) => {
    if (!row.percentage && row.percentage !== 0 && row.status === text) {
      return (
        <Space>
          {text}
          <LoadingOutlined style={{ color: '#1890ff' }} />
        </Space>
      )
    }

    return text
  }

  const columns = [
    {
      title: 'Steps',
      dataIndex: 'step',
      key: 'step',
      render: renderContent
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: renderContent
    },
    {
      title: 'Data Processed',
      dataIndex: 'dataProcessed',
      key: 'dataProcessed',
      render: renderContent
    }
  ]

  return (
    <>
      <Row gutter={16}>
        <Col span={24}>
          <Space>
            <strong>Status:</strong>
            <span>In Progress</span>
          </Space>
        </Col>
        <Col span={12}>
          <Space>
            <strong>Job Id:</strong>
            <span>Job001</span>
          </Space>
        </Col>
        <Col span={12}>
          <Space>
            <strong>Job Type:</strong>
            <span>All</span>
          </Space>
        </Col>
        <Col span={12}>
          <Space>
            <strong>Start Time:</strong>
            <span>07:21:00 08/23/2020</span>
          </Space>
        </Col>
        <Col span={12}>
          <Space>
            <strong>End Time:</strong>
            <span>07:21:00 08/23/2020</span>
          </Space>
        </Col>
      </Row>
      <Table
        dataSource={dataSource}
        columns={columns}
        className="mt-30"
        pagination={false}
        expandable={{
          // eslint-disable-next-line react/display-name
          expandedRowRender: (record: Job) => (
            <>
              <Progress percent={record.percentage} />
              <Paragraph className="text-sm mb-0 text-center">
                {record.dataProcessed}/{record.total}
              </Paragraph>
            </>
          ),
          rowExpandable: record => record.percentage || record.percentage === 0,
          defaultExpandAllRows: true,
          expandIconColumnIndex: -1
        }}
      />
      <Row justify={'end'} className="mt-30">
        <Space size={'large'}>
          <Button>Cancel Job</Button>
          <Button type={'primary'}>Retry Job</Button>
        </Space>
      </Row>
    </>
  )
}

export default JobDetail
