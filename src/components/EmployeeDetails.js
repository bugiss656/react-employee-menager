import { useParams } from 'react-router-dom';


const EmployeeDetails = ({ employees }) => {
    const { id } = useParams();
    const current_employee = employees.filter(employee => employee.id === parseInt(id));

    return (
        <section>
            <h3>{`${current_employee[0].first_name} ${current_employee[0].last_name}`}</h3>
        </section>
    );
}

export default EmployeeDetails;