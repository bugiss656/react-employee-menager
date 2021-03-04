import { Link, useParams } from 'react-router-dom';
import FetchData from './../hooks/FetchData';


const EmployeeDetails = () => {
    const { id } = useParams();
    const { data: employee, isLoading, error } = FetchData(`http://localhost:5000/employees/${id}`);
    
    return (
        <section className="page-section">
            <h3>Profile details</h3>
            <hr/>
            { isLoading && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { employee && (
                <div className="d-flex flex-row employee-details">
                    <div className="d-flex flex-column profile-img align-items-center">
                        <i className="bi bi-person-circle"></i>
                        <Link to={`/updateemployee/${employee.id}`}>
                            <button className="btn btn-outline-secondary">Update profile info</button>
                        </Link> 
                    </div>
                    <div className="profile-general-info">
                        <h5>General informations:</h5>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><b>First name: </b>{employee.first_name}</li>
                            <li className="list-group-item"><b>Last name: </b>{employee.last_name}</li>
                            <li className="list-group-item"><b>Address: </b>{employee.address}</li>
                            <li className="list-group-item"><b>Phone number: </b>{employee.phone_nr}</li>
                            <li className="list-group-item"><b>Email: </b>{employee.email}</li>
                        </ul>
                    </div>
                    <div className="profile-work-info">
                        <h5>Work informations:</h5>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><b>Position: </b>{employee.position}</li>
                            <li className="list-group-item"><b>Employment date: </b>{employee.employment_date}</li>
                            <li className="list-group-item"><b>Contract type: </b>{employee.contract_type}</li>
                            <li className="list-group-item"><b>Seniority: </b>{employee.seniority} years</li>
                        </ul>
                    </div>
                </div>
            )}
        </section>
    );
}

export default EmployeeDetails;