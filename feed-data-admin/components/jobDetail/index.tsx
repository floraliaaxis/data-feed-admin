import React from 'react'
import { Row, Col, Space, Table, Progress } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

const JobDetail = () => {
  const dataSource = [
    {
      key: '1',
      step: 'Step1',
      status: 'In Progress',
      dataProcess: 2323,
      progressBar: true
    },
    {
      key: '2',
      step: 30,
      status: 'In Progress',
      dataProcess: 2323,
      progressBar: true
    },
    {
      key: '3',
      step: 'Step2',
      status: 'Complete',
      dataProcess: 3000,
      progressBar: true
    },
    {
      key: '4',
      step: 100,
      status: 'Complete',
      dataProcess: 3000,
      progressBar: true
    },
    {
      key: '5',
      step: 'Step3',
      status: 'In Progress',
      dataProcess: 2323,
      progressBar: true
    },
    {
      key: '6',
      step: 70,
      status: 'In Progress',
      dataProcess: 2323,
      progressBar: true
    },
    {
      key: '7',
      step: 'Step4',
      status: 'In Progress',
      dataProcess: 2323,
      progressBar: true
    },
    {
      key: '8',
      step: 0,
      status: 'In Progress',
      dataProcess: 2323,
      progressBar: true
    },
    {
      key: '9',
      step: 'Step5',
      status: 'In Progress',
      dataProcess: 2323,
      progressBar: false
    }
  ]

  const renderContent = (text, row) => {
    if (typeof row.step === 'number') {
      if (text === row.step) {
        return {
          children: <Progress percent={text} />,
          props: {
            colSpan: 3
          }
        }
      }

      return {
        children: text,
        props: {
          colSpan: 0
        }
      }
    }

    if (!row.progressBar && row.status === text) {
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
      dataIndex: 'dataProcess',
      key: 'dataProcess',
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
      />
    </>
  )
}

export default JobDetail
