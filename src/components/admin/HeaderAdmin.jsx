import { Avatar, Dropdown, Layout, Space, message, theme } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import React from 'react'
import { NavLink } from 'react-router-dom';
const { Header } = Layout;

const HeaderAdmin = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const items = [
        {
            label: <NavLink to={'changepass'}>Đổi Mật Khẩu</NavLink>,
            key: '0',
            icon: <UserOutlined />
        },
        {
            type: 'divider',
        },
        {
            label: <div>Đăng xuất</div>,
            icon: <LogoutOutlined />,
            key: '1',
            danger: true,
            onClick: () => {
                message.open({
                    type: 'loading',
                    content: 'Đang đăng xuất',
                });

                // setTimeout(() => {
                //     navigate(PATH_LANDING.root);
                // }, 1000);
            },
        },
    ];

    return (
        <Header
            style={{
                padding: 0,
                background: colorBgContainer,
            }}
        >
            <div className='header_avatar'>
                <Dropdown
                    menu={{
                        items,
                    }}
                    trigger={['click']}
                    overlayStyle={{ fontSize: '20px', fontWeight: 'bold' }}
                >
                    <Space onClick={(e) => e.preventDefault()}>
                        <Avatar icon={<UserOutlined />} />
                    </Space>
                </Dropdown>

            </div>
        </Header>
    )
}

export default HeaderAdmin