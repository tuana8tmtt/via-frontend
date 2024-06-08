import { useEffect, useState } from 'react';
import { Layout, Table, message, theme } from 'antd';
import { Content } from 'antd/es/layout/layout';
import Title from 'antd/es/typography/Title';
import Button from 'antd-button-color';
import moment from 'moment';
import { Input } from "antd";
import { Space, Typography } from 'antd';
import { getlistUserAds } from '../../../api/userAds';





const TkNo = () => {
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
            title: 'Info User',
            key: '_id',
            sorter: (a, b) => a._id.toString().localeCompare(b._id.toString()),
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
                return (
                    <>
                        <div className="cl_1">
                            <div className="uid_a">UID TKQC: <span id="uid" onClick={() => handleCopy(record.id_tkqc)}>{record.id_tkqc}</span></div>
                            <div className="uid_a">Name: <span id="uid" onClick={() => handleCopy(record.name)}>{record.name}</span></div>
                            <span className="udDate">Ngày Cập Nhật: {fixedtime.format("DD-MM-YYYY HH:mm:ss A")}</span>
                            <div className="uid_a">UID Cookie: <span id="uid" onClick={() => handleCopy(record.cookie_data[0].uid)}>{record.cookie_data[0].uid}</span>
                            </div>
                            <div className="btn_box">
                                <Button type="primary" className="cpck_btn" onClick={() => handleCopy(record.cookie_data[0].cookie)}>Copy Cookie</Button>
                                <Button type="success" className="cpp_btn" onClick={() => handleCopy(record.cookie_data[0].password)}>Copy Pass</Button>
                                <Button type="info" className="cpif_btn" onClick={() => handleCopy(`${record.cookie_data[0].info}`)}>Copy Info</Button>
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
            sorter: (a, b) => a._id.toString().localeCompare(b._id.toString()),
            render: (record) => {
                function check_status(data) {
                    var a
                    switch (data) {
                        case 1:
                            return a = <Text type="success" className="text_active">Hoạt động</Text>;
                        case 2:
                            return a = <Text type="danger" className="text_active">Vô hiệu hóa</Text>;
                        case 3:
                            return a = <Text type="warning" className="text_active">Nợ</Text>;
                    }
                }
                return (
                    <>
                        <div className="cl_2">
                            <div className="status">
                                <span>- {check_status(record.account_status)}</span>
                            </div>
                            <div className="Friend">- Bạn bè: {record.cookie_data[0].friend}</div>
                            <div className="limit">- Giới hạn: {record.limit.toLocaleString()} ({record.user_roles})</div>
                            <div className="nguong">- Ngưỡng: {record.nguong.toLocaleString()}</div>
                            <div className="total_price">- Tổng tiêu: {record.total_pay.toLocaleString()}</div>
                            <div className="balance">- Số dư: {record.balance}</div>
                            <div className="createdAt">- Ngày tạo: {moment(record.createdAt).format("DD-MM-YYYY HH:mm:ss A")}</div>
                        </div>
                    </>)
            }
        },

    ];
    const fetchData = async () => {
        setLoading(true);
        const { current, pageSize } = tableParams.pagination;
        const account_status = 3

        await getlistUserAds(current, pageSize, account_status)
            .then((res) => {
                const { data, totalRecords } = res.data;
                setData(data);
                setTableParams({
                    ...tableParams,
                    pagination: {
                        ...tableParams.pagination,
                        total: totalRecords,
                    },
                });
                setLoading(false);
            })
            .catch((error) => {
                message.error("Failed to fetch data");
                setLoading(false);
            });
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

        <Layout style={{ padding: '0 24px 24px' }}>
            <Title level={3}>Tài khoản nợ</Title>
            <Content
                style={{
                    padding: 24,
                    minHeight: 280,
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                }}
                className='content_custom'

            >
                {contextHolder}
                <div>

                </div>
                <Table
                    columns={columns}
                    rowKey={(record) => record._id}
                    dataSource={data}
                    pagination={tableParams.pagination}
                    loading={loading}
                    onChange={handleTableChange}
                />
            </Content>
        </Layout>
    );
};
export default TkNo;

