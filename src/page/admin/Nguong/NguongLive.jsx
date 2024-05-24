import { useEffect, useState } from 'react';
import { Table, message, theme } from 'antd';
import { Content } from 'antd/es/layout/layout';
import Title from 'antd/es/typography/Title';
import Button from 'antd-button-color';
import moment from 'moment';
import { Input } from "antd";
import { Space, Typography } from 'antd';
import { getlistUserAds } from '../../../api/userAds';





const NguongLive = () => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [tableParams, setTableParams] = useState({
        pagination: {
            current: 1,
            pageSize: 10,
        },
    });
    const [messageApi, contextHolder] = message.useMessage();
    const { Text, Link } = Typography;
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const columns = [
        {
            key: '_id',
            sorter: (a, b) => a._id - b._id,
            render: (record) => {
                function handleCopy(data) {
                    navigator.clipboard.writeText(data)
                    if (data) {
                        messageApi.open({
                            type: 'success',
                            content: 'Bạn đã sao chép thành công',
                        });
                    }
                    else {
                        messageApi.open({
                            type: 'error',
                            content: 'Tài khoản không có thông tin',
                        });
                    }
                }
                const apitime = record.updatedAt;
                const fixedtime = moment.utc(apitime).local();
                console.log(record)
                return (
                    <>
                        <div className="cl_1">
                            <span className="udDate">Ngày Cập Nhật: <br /> {fixedtime.format("DD-MM-YYYY HH:mm:ss A")}</span>
                            <div className="uid_a">UID: <span id="uid" onClick={() => handleCopy(record.cookie_data[0].uid)}>{record.cookie_data[0].uid}</span>
                            </div>
                            <div className="btn_box">
                                <Button type="primary" className="cpck_btn" onClick={() => handleCopy(record.cookie_data[0].cookie)}>Copy Cookie</Button>
                                <Button type="success" className="cpp_btn" onClick={() => handleCopy(record.cookie_data[0].password)}>Copy Pass</Button>
                                <Button type="info" className="cpif_btn" onClick={() => handleCopy(record.cookie_data[0].info)}>Copy Info</Button>
                                <Button type="lightdark" className="cpif_btn" onClick={() => handleCopy(record.cookie_data[0].access_token)}>Copy Token</Button>
                            </div>
                        </div>
                    </>
                )
            },
            width: '30%',

        },
        {
            title: 'Info ADS',
            key: '_id',
            sorter: true,
            render: (record) => {
                function check_status(data) {
                    var a
                    switch (data) {
                        case 1:
                            return a = <Text type="success" className="active">Hoạt động</Text>;
                        case 2:
                            return a = <Text type="danger" className="inactive">Vô hiệu hóa</Text>;
                        case 3:
                            return a = <Text type="warning" className="no">Nợ</Text>;
                    }
                }
                return (
                    <>
                        <div className="cl_2">
                            <div className="status">
                                <span>- {check_status(record.account_status)}</span>
                            </div>
                            <div className="Friend">- Bạn bè: {record.cookie_data[0].friend}</div>
                            <div className="limit">- Giới hạn: {record.limit} ({record.user_roles})</div>
                            <div className="nguong">- Ngưỡng: {record.nguong}</div>
                            <div className="total_price">- Tổng tiêu: {record.total_pay}</div>
                            <div className="balance">- Số dư: {record.balance}</div>
                            <div className="createdAt">- Ngày tạo: {moment(record.createdAt).format("DD-MM-YYYY HH:mm:ss A")}</div>
                        </div>
                    </>)
            }
        },

    ];
    const fetchData = async () => {
        setLoading(true);
        await getlistUserAds()
            .then((res) => {
                const data = res.data.filter(item => item.account_status === 1)
                setData(data);
                setLoading(false)
            })


    };
    useEffect(() => {
        fetchData();
    }, [tableParams.pagination?.current, tableParams.pagination?.pageSize]);
    const handleTableChange = (pagination, filters, sorter) => {
        setTableParams({
            pagination,
            filters,
            ...sorter,
        });

        // `dataSource` is useless since `pageSize` changed
        if (pagination.pageSize !== tableParams.pagination?.pageSize) {
            setData([]);
        }
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
            {contextHolder}
            <div>
                <Title level={3}>Ngưỡng Live</Title>
            </div>
            <Table
                columns={columns}
                rowKey={(record) => record.id}
                dataSource={data}
                pagination={tableParams.pagination}
                loading={loading}
                onChange={handleTableChange}
            />
        </Content>
    );
};
export default NguongLive;

