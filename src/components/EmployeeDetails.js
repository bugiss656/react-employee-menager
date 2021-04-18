import { Link, useParams, useHistory } from 'react-router-dom';
import FetchData from './../hooks/FetchData';
import Alert from './Alert';
import styles from '../themes/EmployeeDetails.module.css';


const EmployeeDetails = ({ colorTheme, alert, handleDisplayAlert, handleHideAlert }) => {
    const { id } = useParams();
    const { data: employee, isLoading, error } = FetchData(`http://localhost:5000/employees/${id}`);
    const history = useHistory();

    const list_item = colorTheme === 'dark' ? `list-group list-group-flush ${styles.list_group_dark}` : `list-group list-group-flush ${styles.list_group_light}`;

    const deleteEmployee = () => {
        fetch(`http://localhost:5000/employees/${employee.id}`, {
            method: 'DELETE',
        }).then(() => {
            history.push('/employees');
            handleDisplayAlert('warning', 'Employee profile has been deleted.', true);
        });
    }

    return (
        <section className={ colorTheme === "dark" ? `page-section ${styles.title_dark}` : `page-section ${styles.title_light}` }>
            <h3>Profile details</h3>
            <hr />
            { isLoading && <div>Loading...</div>}
            { error && <div>{error}</div>}
            { employee && (
                <>
                    <div className="d-flex flex-row employee-details">
                        <div className={`d-flex flex-column ${styles.profile_img} align-items-center`}>
                            <i className={`bi bi-person-circle ${styles.employee_icon}`}></i>
                            <Link to={`/updateemployee/${employee.id}`}>
                                <button className="btn btn-sm btn-outline-secondary">Update profile info</button>
                            </Link>
                            <button className="btn btn-sm btn-outline-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Delete profile</button>
                            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className={colorTheme === 'dark' ? `modal-header ${styles.modal_header_dark}` : `modal-header ${styles.modal_header_light}`}>
                                            <i class={`bi bi-person-x ${styles.delete_employee_icon}`}></i>
                                            <h5>Delete employee</h5>
                                            <button type="button" className={colorTheme === 'dark' ? 'btn-close btn-close-white' : 'btn-close'} data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className={colorTheme === 'dark' ? `modal-body ${styles.modal_body_dark}` : `modal-body ${styles.modal_body_light}`}>
                                            <p>Are you sure you want to delete the following employee: <b>{`${employee.first_name} ${employee.last_name}`}</b>?</p>
                                        </div>
                                        <div className={colorTheme === 'dark' ? `modal-footer ${styles.modal_footer_dark}` : `modal-footer ${styles.modal_footer_light}`}>
                                            <button onClick={deleteEmployee} type="button" className="btn btn-outline-danger" data-bs-dismiss="modal">Delete</button>
                                            <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.profile_general_info}`}>
                            <h5>General informations:</h5>
                            <ul className="list-group list-group-flush">
                                <li className={`list-group-item ${list_item}`}><b>First name: </b>{employee.first_name}</li>
                                <li className={`list-group-item ${list_item}`}><b>Last name: </b>{employee.last_name}</li>
                                <li className={`list-group-item ${list_item}`}><b>Address: </b>{employee.address}</li>
                                <li className={`list-group-item ${list_item}`}><b>Phone number: </b>{employee.phone_nr}</li>
                                <li className={`list-group-item ${list_item}`}><b>Email: </b>{employee.email}</li>
                            </ul>
                        </div>
                        <div className={`${styles.profile_work_info}`}>
                            <h5>Work informations:</h5>
                            <ul className="list-group list-group-flush">
                                <li className={`list-group-item ${list_item}`}><b>Position: </b>{employee.position}</li>
                                <li className={`list-group-item ${list_item}`}><b>Employment date: </b>{employee.employment_date}</li>
                                <li className={`list-group-item ${list_item}`}><b>Contract type: </b>{employee.contract_type}</li>
                                <li className={`list-group-item ${list_item}`}><b>Contract length: </b>{employee.contract_length}</li>
                                <li className={`list-group-item ${list_item}`}><b>Salary (monthly): </b>{employee.salary} $</li>
                                <li className={`list-group-item ${list_item}`}><b>Available leave: </b>{employee.leave_days} days</li>
                            </ul>
                        </div>
                    </div>
                </>
            )}
            { alert && <Alert type={alert.type} message={alert.message} handleHideAlert={handleHideAlert} />}
        </section>
    );
}

export default EmployeeDetails;