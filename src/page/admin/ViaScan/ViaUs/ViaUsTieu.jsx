import { useEffect, useState } from 'react';
import { Table, theme } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { getlistCookie } from '../../../../api/allCookie';
import Title from 'antd/es/typography/Title';
import Button from 'antd-button-color';

const columns = [
    {
        key: '_id',
        sorter: (a, b) => a._id - b._id,
        render: (record) => (
            <>
                <div dangerouslySetInnerHTML={{__html: record[1]}}>
                    
                </div>
            </>
        ),
        width: '20%',
    },
    {
        title: 'Info ADS',
        key: '_id',
        sorter: true,
        render: (record) => (
            <>
                <div dangerouslySetInnerHTML={{__html: record[2]}}>
                    
                </div>
            </>
        ),
    },

];
const ViaUsTieu = () => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [tableParams, setTableParams] = useState({
        pagination: {
            current: 1,
            pageSize: 10,
        },
    });
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const fetchData = async () => {
        setLoading(true);
        await getlistCookie()
            .then((res) => {
                setData(res.data);
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
            <div>
                <Title level={3}>Via Us Có Tiêu</Title>
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
export default ViaUsTieu;

