import { Avatar, Dropdown, Layout, Space, message, theme } from 'antd';
import { UserOutlined, LogoutOutlined, FullscreenOutlined } from '@ant-design/icons';
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
const { Header } = Layout;

const HeaderAdmin = () => {
    const navigate = useNavigate()
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

                setTimeout(() => {
                    localStorage.removeItem("user")
                    navigate('/login')
                }, 3000);
            },
        },
    ];

    return (
        <Header
            style={{
                padding: 0,
                background: colorBgContainer,
            }}
            className='header_custom'
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
                        <Avatar size={50} src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png" />
                    </Space>
                </Dropdown>

            </div>
        
        </Header>
    )
}

export default HeaderAdmin