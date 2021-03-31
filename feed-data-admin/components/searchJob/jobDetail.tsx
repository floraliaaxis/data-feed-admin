import React from 'react'
import { Modal, Space, Button } from 'antd'
import JobDetail from '../jobDetail'

interface Props {
  isModalVisible: boolean
  setIsModalVisible: any
}

const JobDetailModal = ({ isModalVisible, setIsModalVisible }: Props) => {
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
            <Button>Cancel Job</Button>
            <Button type={'primary'}>Retry Job</Button>
          </Space>
        }
        width={600}
      >
        <JobDetail />
      </Modal>
    </>
  )
}

export default JobDetailModal
