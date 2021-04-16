import { Link } from 'react-router-dom';
import styles from '../themes/Sidebar.module.css';

const Sidebar = ({ colorTheme }) => {
    return (
        <nav className={colorTheme === 'dark' ? `sidebar ${styles.sidebarDark}` : `sidebar ${styles.sidebarLight}`}>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <Link to="/employees" className={ colorTheme === 'dark' ? `nav-link active ${styles.navlinkDark}` : `nav-link active ${styles.navlinkLight}`}>
                        <i className="bi bi-people pe-2"></i>
                        Employee list
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/addemployee" className={colorTheme === 'dark' ? `nav-link active ${styles.navlinkDark}` : `nav-link active ${styles.navlinkLight}`}>
                        <i className="bi bi-person-plus pe-2"></i>
                        Add new employee
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/reports" className={colorTheme === 'dark' ? `nav-link active ${styles.navlinkDark}` : `nav-link active ${styles.navlinkLight}`}>
                        <i className="bi bi-bar-chart pe-2"></i>
                        Reports
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/settings" className={colorTheme === 'dark' ? `nav-link active ${styles.navlinkDark}` : `nav-link active ${styles.navlinkLight}`}>
                        <i className="bi bi-sliders pe-2"></i>
                        Settings
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Sidebar;