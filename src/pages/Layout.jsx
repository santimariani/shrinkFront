import { Outlet, Link } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <nav>
                    <Link to="/">Home&nbsp;</Link>•&nbsp;
                    <Link to="/users/add">Create New User&nbsp;</Link>•&nbsp;
                    <Link to="/users">Current Users&nbsp;</Link>
            </nav>
            <Outlet />
        </>
    );
};

export default Layout; 