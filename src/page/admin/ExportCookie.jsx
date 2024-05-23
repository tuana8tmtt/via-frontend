import { useEffect, useState } from 'react';
import { Form, Input, Select, Space, Table, message, theme } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { getlistCookie } from '../../api/allCookie';
import Title from 'antd/es/typography/Title';
import Button from 'antd-button-color';
const { Option } = Select;

const ExportCookie = () => {
    const [form] = Form.useForm();

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const onFinish = (values) => {
        message.success('Submit success!');
        console.log('Selected Value:', values.chonkieuxuat);
    };

    const onFinishFailed = (errorInfo) => {
        message.error('Submit failed!');
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
                <Title level={3}>Xuất File</Title>
            </div>
            <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    name="chonkieuxuat"
                    label="Chọn kiểu xuất"
                    initialValue="xuat_ccpage"
                    
                >
                    <Select size='large' className="form-control">
                        <Option value="xuat_ccpage">Cookie Page</Option>
                        <Option value="xuat_tk_co">Xuất TK Cổ</Option>
                        <Option value="xuat_loi_ads1">Xuất Lỗi ADS Ko UID</Option>
                        <Option value="xuat_loi_ads2">Xuất Lỗi ADS Có UID</Option>
                        <Option value="xuat_lon30">Xuất Cookie &gt; 30 bb</Option>
                        <Option value="xuat_nho30">Xuất Cookie nho 30 bb</Option>
                        <Option value="xuat_live">Xuất Cookie Live ADS</Option>
                        <Option value="xuat_die">Xuất Cookie Die ADS</Option>
                        <Option value="xuat_nguong">Xuất Có Ngưỡng</Option>
                        <Option value="xuat_vn">Xuất Tiền VNĐ</Option>
                        <Option value="xuat_usd">Xuất Tiền USD</Option>
                        <Option value="xuat_eu">Xuất Tiền EU</Option>
                        <Option value="xuat_bm">Xuất BM</Option>
                        <Option value="xuat_page">Xuất Page</Option>
                        <Option value="xuat_all">Xuất hết toàn bộ</Option>
                        <Option value="xuat_all2">Xuất hết toàn bộ (Ko xóa)</Option>
                    </Select>
                </Form.Item>
                <Form.Item>
                    <Space>
                        <Button size='large' type="success" htmlType="submit">
                            Xuất File
                        </Button>
                    </Space>
                </Form.Item>
            </Form>
        </Content>
    );
};
export default ExportCookie;

