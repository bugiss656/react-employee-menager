import { useParams } from 'react-router-dom';


const EmployeeDetails = ({ employees }) => {
    const { id } = useParams();
    const current_employee = employees.filter(employee => employee.id === parseInt(id));

    return (
        <section className="page-section">
            <h3>Profile details</h3>
            <hr/>
            <div className="d-flex flex-row employee-details">
                <div className="d-flex flex-column profile-img align-items-center">
                    <i className="bi bi-person-circle"></i>
                    <button className="btn btn-outline-secondary">Update profile info</button>
                </div>
                <div className="profile-general-info">
                    <h5>General informations:</h5>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>First name: </b>{current_employee[0].first_name}</li>
                        <li className="list-group-item"><b>Last name: </b>{current_employee[0].last_name}</li>
                        <li className="list-group-item"><b>Position: </b>{current_employee[0].position}</li>
                        <li className="list-group-item"><b>Address: </b>{current_employee[0].address}</li>
                        <li className="list-group-item"><b>Phone number: </b>{current_employee[0].phone_nr}</li>
                    </ul>
                </div>
                <div className="profile-work-info">
                    <h5>Work informations:</h5>
                    <ul className="list-group list-group-flush">

                    </ul>
                </div>
            </div>
        </section>
    );
}

export default EmployeeDetails;