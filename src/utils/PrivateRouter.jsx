import { Navigate, Outlet } from 'react-router-dom';

const isAuthenticate = () => {
    if (!localStorage.getItem('user')) return;
    return JSON.parse(localStorage.getItem('user'));
}

export const PrivateRouter = ({ children }) => {
    const auth = isAuthenticate();
    if (!auth) {
        return <Navigate to="/login" />
    }
    return children
}
export const PrivateRouterHome = ({ children }) => {
    const auth = isAuthenticate();
    if (auth) {
        return <Navigate to="/home" />
    }
    return children
}


