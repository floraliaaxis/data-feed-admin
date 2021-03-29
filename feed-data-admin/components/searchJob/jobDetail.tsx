import React from 'react'
import { Modal, Row, Col, Space, Table, Progress, Button } from 'antd'

interface Props {
  isModalVisible: boolean
  setIsModalVisible: any
}

const JobDetail = ({ isModalVisible, setIsModalVisible }: Props) => {
  const dataSource = [
    {
      key: '1',
      step: 'Step1',
      status: 'In Progress',
      dataProcess: 2323
    },
    {
      key: '2',
      step: 30,
      status: 'In Progress',
      dataProcess: 2323
    },
    {
      key: '3',
      step: 'Step2',
      status: 'Complete',
      dataProcess: 3000
    },
    {
      key: '4',
      step: 'Step3',
      status: 'In Progress',
      dataProcess: 2323
    },
    {
      key: '4',
      step: 70,
      status: 'In Progress',
      dataProcess: 2323
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
      <Modal
        title="Job Detail"
        visible={isModalVisible}
        onCancel={() => {
          setIsModalVisible(false)
        }}
        footer={
          <Space>
            <Button>Cancel</Button>
            <Button type={'primary'}>Retry</Button>
          </Space>
        }
      >
        <Row gutter={16}>
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
          <Col span={12}>
            <Space>
              <strong>Status:</strong>
              <span>In Progress</span>
            </Space>
          </Col>
        </Row>
        <Table dataSource={dataSource} columns={columns} className="mt-30" />
      </Modal>
    </>
  )
}

export default JobDetail
