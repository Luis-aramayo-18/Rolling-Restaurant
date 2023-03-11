import { Navigate, Outlet } from 'react-router-dom';

const AuthRoute = () => {
    const isLoggedIn = sessionStorage.getItem('token');

    return isLoggedIn ? <Navigate to='/menu' /> : <Outlet />;
}

export default AuthRoute