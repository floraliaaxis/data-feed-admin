import React, { Component } from 'react'
import { Modal } from 'antd'
import Cron from 'react-cron-generator'

interface Props {
  isModalVisible: boolean
  setIsModalVisible: any
}

interface State {
  value: string
}

class CronDetail extends Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      value: '111'
    }
  }

  render() {
    const { isModalVisible, setIsModalVisible } = this.props
    return (
      <Modal
        title="Scheduler Detail"
        visible={isModalVisible}
        onCancel={() => {
          setIsModalVisible(false)
        }}
        footer={null}
        width={800}
      >
        <Cron
          onChange={e => {
            this.setState({ value: e })
          }}
          value={this.state.value}
          showResultText={true}
          showResultCron={true}
        />
      </Modal>
    )
  }
}

export default CronDetail
