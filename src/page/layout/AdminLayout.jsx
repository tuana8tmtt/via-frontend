
import { Layout, theme } from 'antd';
import Sidebar from '../../components/admin/Sidebar';
import { Outlet } from 'react-router-dom';
import { Footer } from 'antd/es/layout/layout';
import HeaderAdmin from '../../components/admin/HeaderAdmin';

const { Sider } = Layout;
const AdminLayout = () => {

    
    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Sider trigger={null} collapsible  className='sidebar'>
                <Sidebar />
            </Sider>
            <Layout>
               <HeaderAdmin />
                <Outlet />
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    ZigiSoft ©{new Date().getFullYear()} Created by ZigiSoft
                </Footer>
            </Layout>
        </Layout>
    );
};
export default AdminLayout;