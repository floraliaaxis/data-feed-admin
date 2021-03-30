import { Modal } from 'antd'
import React from 'react'

interface Props {
  isModalVisible: boolean
  setIsModalVisible: any
  message: string
}

const UserDetail = ({ isModalVisible, setIsModalVisible, message }: Props) => {
  return (
    <>
      <Modal
        title="Confirm"
        visible={isModalVisible}
        onCancel={() => {
          setIsModalVisible(false)
        }}
        onOk={() => {
          setIsModalVisible(false)
        }}
      >
        {message}
      </Modal>
    </>
  )
}

export default UserDetail
