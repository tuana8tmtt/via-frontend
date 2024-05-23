import { Form, Input, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Button from 'antd-button-color';
import Title from 'antd/es/typography/Title';
import { Login } from '../../api/auth';
import { useNavigate } from 'react-router-dom';

function SignIn() {
    const [messageApi, contextHolder] = message.useMessage();
    const navigate = useNavigate()
    const onFinish = async (values) => {
        await Login(values)
            .then((res) => {
                messageApi.open({
                    type: 'success',
                    content: 'Đăng nhập thành công',
                })
                localStorage.setItem('user', JSON.stringify(res.data))
                setTimeout(() => {
                    navigate('/home')
                },2000)
            })
            .catch((err) => {
                console.log(err);
                messageApi.open({
                    type: 'error',
                    content: err.response.data.message,
                })
            })

    };

    return (
        <div className='login-bg'>
            {contextHolder}
            <div className="login-form">
                <div >
                    <img className='user-login' src="/src/assets/user-login.png" alt="" />
                </div>
                <div className='title-login' >
                    <Title level={3}>Đăng nhập vào hệ thống</Title>
                </div>
                <Form
                    name="normal_login"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng điền tên đăng nhập!',
                            },
                        ]}
                    >
                        <Input size="large" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Tài khoản" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng điền mật khẩu!',
                            },
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Mật khẩu"
                            size="large"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Ghi nhớ đăng nhập</Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot" href="">
                            Quên mật khẩu
                        </a>
                    </Form.Item>

                    <Form.Item>
                        <Button type="info" size='large' htmlType="submit" className="login-form-button">
                            Đăng nhập
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default SignIn
