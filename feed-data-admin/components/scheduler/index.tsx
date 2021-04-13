import React, { useState } from 'react'
import { Button, Card, Space, Table, Alert } from 'antd'
import { ClockCircleOutlined } from '@ant-design/icons'
import CronDetail from './detail'

const Scheduler = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)

  const dataSource = [
    {
      key: '1',
      id: '1',
      name: 'fullfeed job scheduler  ',
      lastTime: 'EST 07:30:00 08/23/2020',
      nextTime: 'EST 07:30:00 08/24/2020',
      schedule: 'every two hours',
      description: 'this scheduler is',
      enalbe: true
    }
  ]

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Last time',
      dataIndex: 'lastTime',
      key: 'lastTime',
      sorter: true,
      showSorterTooltip: false
    },
    {
      title: 'Next time',
      dataIndex: 'nextTime',
      key: 'nextTime',
      sorter: true,
      showSorterTooltip: false
    },

    {
      title: 'Schedule',
      dataIndex: 'schedule',
      key: 'schedule'
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description'
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      // eslint-disable-next-line react/display-name
      render: (text, row) => {
        return (
          <Space size={'middle'}>
            <Button
              type="link"
              className="p-0"
              onClick={() => setIsModalVisible(true)}
            >
              Re-schedule
            </Button>
            <Button type="link" className="p-0">
              {row.enalbe ? 'Disable' : 'Enable'}
            </Button>
          </Space>
        )
      }
    }
  ]

  return (
    <>
      <Card title="Scheduler Review and Setting">
        <p className="mb-8">
          View all data feed scheduler setting. You can also edit the scheduler
          manually.
        </p>
        <Alert
          message="Current System Time: 1997-07-16T19:20:30.45+01:00 "
          type="info"
          showIcon
          icon={<ClockCircleOutlined />}
          banner
        />
        <Table dataSource={dataSource} columns={columns} className="mt-30" />
        <CronDetail
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        />
      </Card>
    </>
  )
}

export default Scheduler
