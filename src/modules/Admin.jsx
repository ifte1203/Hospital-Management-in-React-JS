import UserList from '../pages/UserList';
import NewUser from '../pages/NewUser';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Admin = () => {
    return (
        <>
        <Sidebar/>
        <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
            <Navbar />
            <Outlet />
        </main>
        </>
    );
}

export default Admin;