import React from 'react'
import { Alert, Modal } from 'antd'
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
        footer={null}
        width={800}
      >
        <Alert message="Error Text" type="error" />
        <JobDetail />
      </Modal>
    </>
  )
}

export default JobDetailModal
