import Card from "antd/es/card/Card";
import logo from '@/assets/react.svg'
import './index.scss'
import { Button, Checkbox, Form, Input } from 'antd';

function Login() {
    return (
        <div className="login">
            <Card className="login-container">
                <img className="login-logo" src={logo} alt = ""/>
                <Form>
                    <Form.Item>
                        <Input size="large" placeholder="phone" />
                    </Form.Item>
                    <Form.Item>
                        <Input size="large" placeholder="code" />
                    </Form.Item>
                    <Form.Item name='agree'>
                        <Checkbox className="login-checkbox-label">
                            agree to collect the message
                        </Checkbox>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" size="large" block>
                            login
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

export default Login;