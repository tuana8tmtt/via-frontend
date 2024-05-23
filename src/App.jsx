import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import AdminLayout from './page/layout/AdminLayout'
import AuthLayout from './page/layout/AuthLayout'
import AllCookie from './page/admin/AllCookie'
import SignIn from './page/auth/SignIn'
import { PrivateRouter } from './utils/PrivateRouter'
import PageNotFound from './page/layout/PageNotFound'
import Banking from './page/admin/Nav1/Banking'
import American from './page/admin/Nav1/American'
import NgonChuaCheck from './page/admin/Nav1/NgonChuaCheck'
import Ngon1k5 from './page/admin/Nav1/250_1k5'
import NgonLive from './page/admin/Nav1/NgonLive'
import NgonDie from './page/admin/Nav1/NgonDie'
import NgonNo from './page/admin/Nav1/NgonNo'
import NguongLive from './page/admin/Nguong/NguongLive'
import NguongTieuLive from './page/admin/Nguong/NguongTieuLive'
import NguongDie from './page/admin/Nguong/NguongDie'
import TkNo from './page/admin/Nguong/TkNo'
import TkClose from './page/admin/Nguong/TkClose'
import CardLive from './page/admin/CardLive'
import Limit50TTB from './page/admin/Limit/Limit50TTB'
import Limit50USD from './page/admin/Limit/Limit50USD'
import Limit50ChuaCheck from './page/admin/Limit/Limit50ChuaCheck'
import Limit50Co from './page/admin/Limit/Limit50Co'
import TraTruoc from './page/admin/TraTruoc/TraTruoc'
import TraTruoc250 from './page/admin/TraTruoc/TraTruoc250'
import CoSoDu from './page/admin/TraTruoc/CoSoDu'
import ViaUsLiveAds from './page/admin/ViaScan/ViaUs/ViaUsLiveAds'
import ViaUsDieAds from './page/admin/ViaScan/ViaUs/ViaUsDieAds'
import ViaUsTieu from './page/admin/ViaScan/ViaUs/ViaUsTieu'
import ViaUs50Fr from './page/admin/ViaScan/ViaUs/ViaUs50Fr'
import ViaPhiLiveAds from './page/admin/ViaScan/ViaPhi/ViaPhiLiveAds'
import ViaPhiTieu from './page/admin/ViaScan/ViaPhi/ViaPhiTieu'
import ViaPhiDieAds from './page/admin/ViaScan/ViaPhi/ViaPhiDieAds'
import ViaPhi50Fr from './page/admin/ViaScan/ViaPhi/ViaPhi50Fr'
import ViaEu from './page/admin/ViaScan/ViaEu'
import ViaIndo from './page/admin/ViaScan/ViaIndo'
import ViaCanada from './page/admin/ViaScan/ViaCanada'
import BmAll from './page/admin/BM/BmAll'
import BmNgon from './page/admin/BM/BmNgon'
import Bm350 from './page/admin/BM/Bm350'
import PageTich from './page/admin/Page/PageTich'
import Page1k from './page/admin/Page/Page1k'
import Page10k from './page/admin/Page/Page10k'
import Page20k from './page/admin/Page/Page20k'
import PageCo from './page/admin/Page/PageCo'
import PageAll from './page/admin/Page/PageAll'
import KhongNguong from './page/admin/KhongNguong'
import ExportCookie from './page/admin/ExportCookie'
import ChangePass from './page/admin/ChangePass'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<PrivateRouter><AdminLayout /></PrivateRouter>}>
          <Route index element={<Navigate to="home" />} />
        </Route>
        <Route path='home' element={<PrivateRouter><AdminLayout /></PrivateRouter>}>
          <Route index element={<Navigate to="all-cookie" />} />
          {/* All Cookie */}
          <Route path='all-cookie' element={<AllCookie />} />
          {/* Nav 1 */}
          <Route path='banking' element={<Banking />} />
          <Route path='american' element={<American />} />
          <Route path='ngon-chua-check' element={<NgonChuaCheck />} />
          <Route path='250-1k5' element={<Ngon1k5 />} />
          <Route path='ngon-hup-live' element={<NgonLive />} />
          <Route path='ngon-hup-die' element={<NgonDie />} />
          <Route path='ngon-hup-no' element={<NgonNo />} />
          {/* Nguong */}
          <Route path='nguong-live' element={<NguongLive />} />
          <Route path='nguong-tieu-live' element={<NguongTieuLive />} />
          <Route path='nguong-die' element={<NguongDie />} />
          <Route path='tk-no' element={<TkNo />} />
          <Route path='tk-close' element={<TkClose />} />
          {/* Thẻ Live */}
          <Route path='the-live' element={<CardLive />} />
          {/* Limit */}
          <Route path='limit-50-ttb' element={<Limit50TTB />} />
          <Route path='limit-50-usd' element={<Limit50USD />} />
          <Route path='limit-50-chua-check' element={<Limit50ChuaCheck />} />
          <Route path='limit-50-co' element={<Limit50Co />} />
          {/* Trả Trước */}
          <Route path='tra-truoc' element={<TraTruoc />} />
          <Route path='tra-truoc-250' element={<TraTruoc250 />} />
          <Route path='co-so-du' element={<CoSoDu />} />
          {/* Via US */}
          <Route path='via-us-live-ads' element={<ViaUsLiveAds />} />
          <Route path='via-us-die-ads' element={<ViaUsDieAds />} />
          <Route path='via-us-co-tieu' element={<ViaUsTieu />} />
          <Route path='via-us-50-fr' element={<ViaUs50Fr />} />
          {/* Via Phi */}
          <Route path='via-phi-live-ads' element={<ViaPhiLiveAds />} />
          <Route path='via-phi-die-ads' element={<ViaPhiDieAds />} />
          <Route path='via-phi-co-tieu' element={<ViaPhiTieu />} />
          <Route path='via-phi-50-fr' element={<ViaPhi50Fr />} />
          {/* Via */}
          <Route path='via-eu' element={<ViaEu />} />
          <Route path='via-indo' element={<ViaIndo />} />
          <Route path='via-canada' element={<ViaCanada />} />
          {/* BM */}
          <Route path='bm-all' element={<BmAll />} />
          <Route path='bm-ngon' element={<BmNgon />} />
          <Route path='bm1-350' element={<Bm350 />} />
          {/* Page */}
          <Route path='page-tick' element={<PageTich />} />
          <Route path='page-1k' element={<Page1k />} />
          <Route path='page-10k' element={<Page10k />} />
          <Route path='page-20k' element={<Page20k />} />
          <Route path='page-co' element={<PageCo />} />
          <Route path='page-all' element={<PageAll />} />
          {/* Không ngưỡng */}
          <Route path='khong-nguong' element={<KhongNguong />} />
          {/* export cookie */}
          <Route path='export-cookie' element={<ExportCookie />} />
          {/* Change Pass */}
          <Route path='changepass' element={<ChangePass />} />
        </Route>
        <Route path='login' element={<SignIn />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App
