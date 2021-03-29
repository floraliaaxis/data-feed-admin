import React, { useState } from 'react'
import {
  Card,
  Button,
  Row,
  Col,
  Table,
  Form,
  Select,
  DatePicker,
  Alert
} from 'antd'
import JobDetail from './jobDetail'

const { Option } = Select

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 }
}

const tailLayout = {
  wrapperCol: { offset: 6, span: 18 }
}

const SearchJob = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
  const dataSource = [
    {
      key: '1',
      id: 'Job001',
      jobType: 'All',
      startDate: '07:21:00 08/23/2020',
      endDate: '07:21:00 08/23/2020',
      status: 'Success'
    },
    {
      key: '2',
      id: 'Job002',
      jobType: 'All',
      startDate: '07:21:00 08/23/2020',
      endDate: '07:21:00 08/23/2020',
      status: 'Failed'
    },
    {
      key: '3',
      id: 'Job003',
      jobType: 'All',
      startDate: '07:21:00 08/23/2020',
      endDate: '07:21:00 08/23/2020',
      status: 'Failed'
    },
    {
      key: '4',
      id: 'Job004',
      jobType: 'All',
      startDate: '07:21:00 08/23/2020',
      endDate: '07:21:00 08/23/2020',
      status: 'Failed'
    }
  ]

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
      // eslint-disable-next-line react/display-name
      render: text => (
        <a
          onClick={() => {
            setIsModalVisible(true)
          }}
        >
          {text}
        </a>
      )
    },
    {
      title: 'Job Type',
      dataIndex: 'jobType',
      key: 'jobType'
    },
    {
      title: 'Start Date',
      dataIndex: 'startDate',
      key: 'startDate'
    },
    {
      title: 'End Date',
      dataIndex: 'endDate',
      key: 'endDate'
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status'
    }
  ]

  return (
    <>
      <Card title="Job List">
        <Alert
          message="Data feed started successfully, please check the result later."
          type="success"
        />
        <Alert
          message="Sorry, data feed failed with error, please contact the administrator."
          type="error"
        />
        <Form {...layout} name="loginForm">
          <Row gutter={16}>
            <Col span={9}>
              <Form.Item label="Job Type" name="jobType" rules={[]}>
                <Select defaultValue="all">
                  <Option value="all">All</Option>
                  <Option value="Full Feed">Full Feed</Option>
                  <Option value="Partial Feed">Partial Feed</Option>
                  <Option value="WCS Feed">WCS Feed</Option>
                </Select>
              </Form.Item>
              <Form.Item label="Start Time" name="startTime" rules={[]}>
                <DatePicker />
              </Form.Item>
              <Form.Item label="End Time" name="endTime" rules={[]}>
                <DatePicker />
              </Form.Item>
              <Form.Item label="Status" name="status" rules={[]}>
                <Select defaultValue="all">
                  <Option value="all">All</Option>
                  <Option value="success">Success</Option>
                  <Option value="inProgress">In Progress</Option>
                  <Option value="fail">Fail</Option>
                </Select>
              </Form.Item>
              <Form.Item {...tailLayout}>
                <Button type={'primary'}>Search Job</Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
        {isModalVisible}
        <Table dataSource={dataSource} columns={columns} className="mt-30" />
        <JobDetail
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        />
      </Card>
    </>
  )
}

export default SearchJob
