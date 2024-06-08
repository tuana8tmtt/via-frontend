import { Flex, Menu } from 'antd';
import moment from 'moment';
import { NavLink, useLocation } from 'react-router-dom';
const items = [
  {
    key: 'all-cookie',
    label: <NavLink to={'all-cookie'}>All Cookie</NavLink>,
  },
  {
    key: 'sub1',
    label: 'Ngon Húp',
    children: [
      {
        key: 'banking',
        label: <NavLink to={'banking'}>Banking</NavLink>,
      },
      {
        key: 'american',
        label: <NavLink to={'american'}>American Express</NavLink>,
      },
      {
        key: 'ngon-chua-check',
        label: <NavLink to={'ngon-chua-check'}>Ngon Chưa Check</NavLink>,
      },
      {
        key: '250-1k5',
        label: <NavLink to={'250-1k5'}>250,1k5</NavLink>,
      },
      {
        key: 'ngon-hup-live',
        label: <NavLink to={'ngon-hup-live'}>Ngon Húp Live</NavLink>,
      },
      {
        key: 'ngon-hup-die',
        label: <NavLink to={'ngon-hup-die'}>Ngon Húp Die</NavLink>,
      },
      {
        key: 'ngon-hup-no',
        label: <NavLink to={'ngon-hup-no'}>Ngon Húp Nợ</NavLink>,
      },
    ],
  },
  {
    key: 'sub2',
    label: 'Có Ngưỡng',
    children: [
      {
        key: 'nguong-live',
        label: <NavLink to={'nguong-live'}>Ngưỡng Live</NavLink>,
      },
      {
        key: 'nguong-tieu-live',
        label: <NavLink to={'nguong-tieu-live'}>Ngưỡng Tiêu Live</NavLink>,
      },
      {
        key: 'nguong-die',
        label: <NavLink to={'nguong-die'}>Ngưỡng Die</NavLink>,
      },
      {
        key: 'tk-no',
        label: <NavLink to={'tk-no'}>TK Nợ</NavLink>,
      },
      {
        key: 'tk-close',
        label: <NavLink to={'tk-close'}>TK Close</NavLink>,
      },
    ],
  },
  {
    key: 'the-live',
    label: <NavLink to={'the-live'}>Thẻ Live</NavLink>,
  },
  {
    key: 'sub3',
    label: 'Limit 50',
    children: [
      {
        key: 'limit-50-ttb',
        label: <NavLink to={'limit-50-ttb'}>Limit 50 TTB</NavLink>,
      },
      {
        key: 'limit-50-usd',
        label: <NavLink to={'limit-50-usd'}>Limit 50 USD</NavLink>,
      },
      {
        key: 'limit-50-chua-check',
        label: <NavLink to={'limit-50-chua-check'}>Limit 50 Chưa Check</NavLink>,
      },
      {
        key: 'limit-50-co',
        label: <NavLink to={'limit-50-co'}>Limit 50 Cổ</NavLink>,
      },
    ],
  },
  {
    key: 'sub4',
    label: 'Trả trước',
    children: [
      {
        key: 'tra-truoc',
        label: <NavLink to={'tra-truoc'}>Trả Trước</NavLink>,
      },
      {
        key: 'tra-truoc-250',
        label: <NavLink to={'tra-truoc-250'}>Trả Trước 250</NavLink>,
      },
      {
        key: 'co-so-du',
        label: <NavLink to={'co-so-du'}>Có Số Dư</NavLink>,
      },
    ],
  },
  {
    key: 'sub5',
    label: 'Via Scan',
    children: [
      {
        key: 'via-us',
        label: 'Via US',
        children: [
          {
            key: 'via-us-live-ads',
            label: <NavLink to={'via-us-live-ads'}>Live ADS</NavLink>
          },
          {
            key: 'via-us-die-ads',
            label: <NavLink to={'via-us-die-ads'}>Die ADS</NavLink>
          },
          {
            key: 'via-us-co-tieu',
            label: <NavLink to={'via-us-co-tieu'}>Có Tiêu</NavLink>
          },
          {
            key: 'via-us-50-fr',
            label: <NavLink to={'via-us-50-fr'}>Dưới 50 Fr</NavLink>
          }
        ]
      },
      {
        key: 'via-phi',
        label: 'Via Phi',
        children: [
          {
            key: 'via-phi-live-ads',
            label: <NavLink to={'via-phi-live-ads'}>Live ADS</NavLink>
          },
          {
            key: 'via-phi-die-ads',
            label: <NavLink to={'via-phi-die-ads'}>Die ADS</NavLink>
          },
          {
            key: 'via-phi-co-tieu',
            label: <NavLink to={'via-phi-co-tieu'}>Có Tiêu</NavLink>
          },
          {
            key: 'via-phi-50-fr',
            label: <NavLink to={'via-phi-50-fr'}>Dưới 50 Fr</NavLink>
          }
        ]
      },
      {
        key: 'via-eu',
        label: <NavLink to={'via-eu'}>Via EU</NavLink>,
      },
      {
        key: 'via-indo',
        label: <NavLink to={'via-indo'}>Via Indo</NavLink>,
      },
      {
        key: 'via-canada',
        label: <NavLink to={'via-canada'}>Via Canada</NavLink>,
      },
    ],
  },
  {
    key: 'sub6',
    label: 'BM',
    children: [
      {
        key: 'bm-all',
        label: <NavLink to={'bm-all'}>BM All</NavLink>,
      },
      {
        key: 'bm-ngon',
        label: <NavLink to={'bm-ngon'}>BM Ngon</NavLink>,
      },
      {
        key: 'bm1-350',
        label: <NavLink to={'bm1-350'}>BM1 350</NavLink>,
      },
    ],
  },
  {
    key: 'sub7',
    label: 'Page',
    children: [
      {
        key: 'page-tick',
        label: <NavLink to={'page-tick'}>Page Tích</NavLink>,
      },
      {
        key: 'page-1k',
        label: <NavLink to={'page-1k'}>Page 1k-{'>'} 5k</NavLink>,
      },
      {
        key: 'page-10k',
        label: <NavLink to={'page-10k'}>Page 5k-{'>'} 20k</NavLink>,
      },
      {
        key: 'page-20k',
        label: <NavLink to={'page-20k'}>Page {'>'} 20k</NavLink>,
      },
      {
        key: 'page-co',
        label: <NavLink to={'page-co'}>Page Cổ</NavLink>,
      },
      {
        key: 'page-all',
        label: <NavLink to={'page-all'}>Page All</NavLink>,
      },
    ],
  },
  {
    key: 'khong-nguong',
    label: <NavLink to={'khong-nguong'}>Không Ngưỡng</NavLink>,
  },
  {
    key: 'export-cookie',
    label: <NavLink to={'export-cookie'}>Xuất Cookie</NavLink>,
  },
];

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname.replace('/home/', '')
  return (
    <div>
      <Flex align='center' justify='center'>
        <div className='logo'>{moment().format('DD/MM')} : 0 CC ,0 BM ,0 Page	</div>
      </Flex>
      <Menu
        selectedKeys={[currentPath]}
        mode="inline"
        theme="dark"
        items={items}
        style={{
          fontSize: '16px'
        }}
        className='menu-bar'
      />
    </div>
  );
}

export default Sidebar