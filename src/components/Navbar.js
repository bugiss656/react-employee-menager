import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar navbar-light fixed-top sticky-top bg-light">
            <Link to="/" className="navbar-brand col-md-3 col-lg-2 px-2">
                <i className="bi bi-journals px-1"></i>
                EmployeeMenager
            </Link>   
        </div>
    );
}

export default Navbar;