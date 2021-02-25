import Employee from './Employee';

const EmployeesList = ({ employees }) => {
    return (
        <section className="page-section">
            <h3>Workers list</h3>
            <hr/>
            <table className="table table-hover employee-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Position</th>
                        <th>Address</th>
                        <th>Phone number</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee => (
                        <Employee 
                            key={employee.id}
                            id={employee.id}
                            first_name={employee.first_name}
                            last_name={employee.last_name} 
                            position={employee.position}
                            address={employee.address}
                            phone_nr={employee.phone_nr}>
                        </Employee>
                    ))}
                </tbody>
            </table>
        </section>
    );
}

export default EmployeesList;