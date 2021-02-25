import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <nav className="sidebar">
            <ul className="nav flex-column">
                <li className="nav-item">
                    <Link to="/employees" className="nav-link active">
                        <i className="bi bi-people pe-2"></i>
                        Employee list
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/addworker" className="nav-link active">
                        <i className="bi bi-person-plus pe-2"></i>
                        Add new employee
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/reports" className="nav-link active">
                        <i className="bi bi-bar-chart pe-2"></i>
                        Reports
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/settings" className="nav-link active">
                        <i className="bi bi-sliders pe-2"></i>
                        Settings
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Sidebar;