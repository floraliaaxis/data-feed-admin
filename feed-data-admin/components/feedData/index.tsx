import {Card, Button, Row, Col, Table} from 'antd'
import {SearchOutlined} from '@ant-design/icons';

const FeedData = () => {
    const dataSource = [
        {
            key: '1',
            jobName: 'Job001',
            startDate: '07:21:00 08/23/2020',
            endDate: '07:21:00 08/23/2020',
            status: 'Success',
        },
        {
            key: '2',
            jobName: 'Job002',
            startDate: '07:21:00 08/23/2020',
            endDate: '07:21:00 08/23/2020',
            status: 'Failed',
        },
        {
            key: '3',
            jobName: 'Job003',
            startDate: '07:21:00 08/23/2020',
            endDate: '07:21:00 08/23/2020',
            status: 'Failed',
        },
        {
            key: '4',
            jobName: 'Job004',
            startDate: '07:21:00 08/23/2020',
            endDate: '07:21:00 08/23/2020',
            status: 'Failed',
        }
    ];

    const columns = [
        {
            title: 'Job Name',
            dataIndex: 'jobName',
            key: 'jobName',
        },
        {
            title: 'Start Date',
            dataIndex: 'startDate',
            key: 'startDate',
        },
        {
            title: 'End Date',
            dataIndex: 'endDate',
            key: 'endDate',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        }
    ];

    return (
        <>
            <Card title="" extra={<Button type={"primary"}>Run Data Feed</Button>}>
                <Row gutter={16}>
                    <Col>
                        <Button type={"primary"}>Search Job Name <SearchOutlined/></Button>
                    </Col>
                    <Col>
                        <Button type={"primary"}>Status</Button>
                    </Col>
                    <Col>
                        <Button type={"primary"}>Start Date</Button>
                    </Col>
                    <Col>
                        <Button type={"primary"}>End Date</Button>
                    </Col>
                </Row>
                <Table dataSource={dataSource} columns={columns} className="mt-30" />
            </Card>
        </>
    )
}

export default FeedData