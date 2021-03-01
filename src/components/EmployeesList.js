import Employee from './Employee';
import FetchData from './../hooks/FetchData';


const EmployeesList = () => {
    const { data: employees, isLoading, error } = FetchData('http://localhost:5000/employees');

    return (
        <section className="page-section">
            <h3>Workers list</h3>
            <hr/>
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {employees && (
                <table className="table table-hover employee-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Position</th>
                            <th>Address</th>
                            <th>Phone number</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map(employee => (
                            <Employee
                                key={employee.id}
                                id={employee.id}
                                first_name={employee.first_name}
                                last_name={employee.last_name}
                                address={employee.address}
                                phone_nr={employee.phone_nr}
                                email={employee.email}
                                position={employee.position}
                                employment_date={employee.employment_date}
                                contract_length={employee.contract_length}
                                seniority={employee.seniority}
                            >
                            </Employee>
                        ))}
                    </tbody>
                </table>
            )}
        </section>
    );
}

export default EmployeesList;