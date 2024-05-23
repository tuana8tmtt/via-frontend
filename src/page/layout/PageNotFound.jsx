import { Result } from "antd"
import Button from "antd-button-color"
import { NavLink } from "react-router-dom"

const PageNotFound = () => {
    return (
        <div className="page-not-found">
            <Result
                status="404"
                title="404"
                subTitle="Xin lỗi, trang mà bạn ghé thăm không tồn tại"
                extra={<Button type="primary"><NavLink to={'/'}>Quay Lại</NavLink></Button>}
            />
        </div>
    )
}

export default PageNotFound