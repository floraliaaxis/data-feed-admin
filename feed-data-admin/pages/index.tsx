import {Layout, Row, Col, Button} from 'antd'
import HeaderCon from '../components/header'
import FeedData from '../components/feedData'
import UserManagement from '../components/userManagement'
import ChangePassword from "../components/changePwd";

export default function Home() {
    const { Content } = Layout

    return (
        <Layout>
            <HeaderCon/>
            <Content>
                <FeedData />
                <UserManagement />
                <ChangePassword />
            </Content>
        </Layout>
    )
}
