import { useEffect, useState } from 'react';
import { Form, Input, Select, Space, Table, message, theme } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { getlistCookie } from '../../api/allCookie';
import Title from 'antd/es/typography/Title';
import Button from 'antd-button-color';
import { ChangePassword } from '../../api/auth';
const { Option } = Select;

const ChangePass = () => {
    const [form] = Form.useForm();

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const onFinish = async (values) => {
        const user = JSON.parse(localStorage.getItem('user'))
        message.success('Đổi mật khẩu thành công!');
        const data = {
            "_id" : user.user._id,
            "oldPassword": values.oldPassword,
            "newPassword": values.newPassword
        }
        await ChangePassword(data)
        .then((res) => {
            console.log(res);
        })
    };

    const onFinishFailed = (errorInfo) => {
        message.error('Lỗi!');
        console.log('Failed:', errorInfo);
    };


    return (
        <Content
            style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
            }}
        >
            <div>
                <Title level={3}>Đổi mật khẩu</Title>
            </div>
            <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    name="oldPassword"
                    label="Mật khẩu cũ"
                    rules={[
                        {
                            required: true,
                            message: 'Không được để trống!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password size='large' />
                </Form.Item>
                <Form.Item
                    name="newPassword"
                    label="Mật khẩu mới"
                    rules={[
                        {
                            required: true,
                            message: 'Không được để trống!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password size='large' />
                </Form.Item>

                <Form.Item
                    name="confirm"
                    label="Điền lại mật khẩu mới"
                    dependencies={['newPassword']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Không được để trống!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('newPassword') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('Mật khẩu không khớp với mật khẩu mới!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password size='large' />
                </Form.Item>
                <Form.Item>
                    <Space>
                        <Button size='large' type="success" htmlType="submit">
                            Đổi mật khẩu
                        </Button>
                    </Space>
                </Form.Item>
            </Form>
        </Content>
    );
};
export default ChangePass;

