import { Link } from 'react-router-dom';
import styles from '../themes/Navbar.module.css';

const Navbar = ({ colorTheme }) => {
    return (
        <div className={colorTheme === 'dark' ? `navbar ${styles.navbarDark} sticky-top`  : `navbar ${styles.navbarLight} sticky-top`}>
            <Link to="/" className={colorTheme === 'dark' ? `navbar-brand ${styles.navbarDark_link} col-md-3 px-2` : `navbar-brand ${styles.navbarLight_link} col-md-3 px-2`}>
                <i className="bi bi-journals px-1"></i>
                EmployeeMenager
            </Link>   
        </div>
    );
}

export default Navbar;