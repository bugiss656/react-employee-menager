import { Link, useParams, useHistory } from 'react-router-dom';
import FetchData from './../hooks/FetchData';


const EmployeeDetails = () => {
    const { id } = useParams();
    const { data: employee, isLoading, error } = FetchData(`http://localhost:5000/employees/${id}`);
    const history = useHistory();

    const deleteEmployee = () => {
        fetch(`http://localhost:5000/employees/${employee.id}`, {
            method: 'DELETE',
        }).then(() => {
            history.push('/employees');
        });
    }
    
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
                        <button className="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Delete profile</button>
                        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5>Delete employee</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <p>Are you sure you want to delete <b>{`${employee.first_name} ${employee.last_name}`}</b> employee?</p>
                                    </div>
                                    <div className="modal-footer">
                                        <button onClick={deleteEmployee} type="button" className="btn btn-danger" data-bs-dismiss="modal">Delete</button>
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
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