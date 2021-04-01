import React from 'react'
import { Modal } from 'antd'
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
        width={600}
      >
        <JobDetail />
      </Modal>
    </>
  )
}

export default JobDetailModal
