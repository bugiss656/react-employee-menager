import FetchData from './../hooks/FetchData';
import { useParams } from 'react-router-dom';
import UpdateEmployeeForm from './UpdateEmployeeForm';
import styles from '../themes/UpdateEmployee.module.css';


const UpdateEmployee = ({ colorTheme, handleDisplayAlert }) => {
    const { id } = useParams();
    const { data: employee, isLoading, error } = FetchData(`https://my-json-server.typicode.com/mbugiel656/employee-json-server/employees/${id}`);

    return (
        <>
            { isLoading && <div className={colorTheme === 'dark' ? `${styles.title_dark}` : `${styles.title_light}`}>Loading...</div>}
            { error && <div>{error}</div>}
            { employee && <UpdateEmployeeForm colorTheme={colorTheme} employee={employee} handleDisplayAlert={handleDisplayAlert} />}
        </>
    );
}

export default UpdateEmployee;