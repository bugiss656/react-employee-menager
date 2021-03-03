import FetchData from './../hooks/FetchData';
import { useParams } from 'react-router-dom';
import UpdateEmployeeForm from './UpdateEmployeeForm';

const UpdateEmployee = () => {
    const { id } = useParams();
    const { data: employee, isLoading, error } = FetchData(`http://localhost:5000/employees/${id}`);

    return (
        <>
            { isLoading && <div>Loading...</div>}
            { error && <div>{error}</div>}
            { employee && <UpdateEmployeeForm employee={employee} />}
        </>
    );
}

export default UpdateEmployee;