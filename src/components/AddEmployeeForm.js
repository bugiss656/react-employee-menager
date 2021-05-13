import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import styles from '../themes/EmployeeForm.module.css';


const AddEmployeeForm = ({ colorTheme, handleDisplayAlert }) => {
    const history = useHistory();
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        fetch('https://my-json-server.typicode.com/mbugiel656/employee-json-server/employees', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(() => {
            console.log('Employee profile added...');
            history.push('/employees');
            handleDisplayAlert('success', 'New employee succesfully added.', true);
        });
    }

    return (
        <section className={ colorTheme === "dark" ? `page-section ${styles.title_dark}` : `page-section ${styles.title_light}` }>
            <h3>Add worker</h3>
            <hr />
            <form onSubmit={handleSubmit(onSubmit)}>
                <h5>General informations:</h5>
                <div className="row g-2 mb-3">
                    <div className="col-md-3 form-floating">
                        <input
                            ref={register}
                            name="first_name"
                            required
                            type="text"
                            className={ colorTheme === 'dark' ? `form-control ${styles.input_dark}` : `form-control ${styles.input_light}` }
                            id="first-name"
                            placeholder="First name"
                        />
                        <label htmlFor="first-name" className={ colorTheme === 'dark' ? `${styles.label_dark}` : `${styles.label_light}` }>First name</label>
                    </div>
                    <div className="col-md-3 form-floating">
                        <input
                            ref={register}
                            name="last_name"
                            required
                            type="text"
                            className={ colorTheme === 'dark' ? `form-control ${styles.input_dark}` : `form-control ${styles.input_light}` }
                            id="last-name"
                            placeholder="Last name"
                        />
                        <label htmlFor="last-name" className={ colorTheme === 'dark' ? `${styles.label_dark}` : `${styles.label_light}` }>Last name</label>
                    </div>
                </div>
                <div className="row g-2 mb-3">
                    <div className="col-md-3 form-floating">
                        <input
                            ref={register}
                            name="address"
                            required
                            type="text"
                            className={ colorTheme === 'dark' ? `form-control ${styles.input_dark}` : `form-control ${styles.input_light}` }
                            id="address"
                            placeholder="Address"
                        />
                        <label htmlFor="address" className={ colorTheme === 'dark' ? `${styles.label_dark}` : `${styles.label_light}` }>Address</label>
                    </div>
                    <div className="col-md-3 form-floating">
                        <input
                            ref={register}
                            name="phone_nr"
                            required
                            type="text"
                            className={ colorTheme === 'dark' ? `form-control ${styles.input_dark}` : `form-control ${styles.input_light}` }
                            id="phone-nr"
                            placeholder="Phone number"
                        />
                        <label htmlFor="phone-nr" className={ colorTheme === 'dark' ? `${styles.label_dark}` : `${styles.label_light}` }>Phone number</label>
                    </div>
                </div>
                <div className="row g-2 mb-3">
                    <div className="col-md-3 form-floating">
                        <input
                            ref={register}
                            name="email"
                            required
                            type="email"
                            className={ colorTheme === 'dark' ? `form-control ${styles.input_dark}` : `form-control ${styles.input_light}` }
                            id="email"
                            placeholder="Email"
                        />
                        <label htmlFor="email" className={ colorTheme === 'dark' ? `${styles.label_dark}` : `${styles.label_light}` }>Email</label>
                    </div>
                </div>

                <h5>Work informations:</h5>
                <div className="row g-2 mb-3">
                    <div className="col-md-3 form-floating">
                        <select
                            ref={register}
                            name="position"
                            id="position"
                            className={ colorTheme === 'dark' ? `form-select ${styles.input_dark}` : `form-select ${styles.input_light}` }
                            placeholder="Position"
                        >
                            <option value=""></option>
                            <option value="Accountant">Accountant</option>
                            <option value="Dealer">Dealer</option>
                            <option value="Manager">Manager</option>
                            <option value="Warehouseman">Warehouseman</option>
                            <option value="Customer service">Customer service</option>
                        </select>
                        <label htmlFor="position" className={ colorTheme === 'dark' ? `${styles.label_dark}` : `${styles.label_light}` }>Position</label>
                    </div>
                    <div className="col-md-3 form-floating">
                        <input
                            ref={register}
                            name="employment_date"
                            type="date"
                            className={ colorTheme === 'dark' ? `form-control ${styles.input_dark}` : `form-control ${styles.input_light}` }
                            id="employment-date"
                            placeholder="Date of employment" />
                        <label htmlFor="employment-date" className={ colorTheme === 'dark' ? `${styles.label_dark}` : `${styles.label_light}` }>Date of employment</label>
                    </div>
                </div>
                <div className="row g-2 mb-3">
                    <div className="col-md-3 form-floating">
                        <select
                            ref={register}
                            name="contract_type"
                            id="contract-type"
                            className={ colorTheme === 'dark' ? `form-select ${styles.input_dark}` : `form-select ${styles.input_light}` }
                            placeholder="Contract type"
                        >
                            <option value=""></option>
                            <option value="Practice">Practice</option>
                            <option value="Internship">Internship</option>
                            <option value="Employment contract">Employment contract</option>
                            <option value="Mandatory contract">Mandatory contract</option>
                            <option value="Business-to-business">Business-to-business</option>
                        </select>
                        <label htmlFor="contract-type" className={ colorTheme === 'dark' ? `${styles.label_dark}` : `${styles.label_light}` }>Contract type</label>
                    </div>
                    <div className="col-md-3 form-floating">
                        <select
                            ref={register}
                            name="contract_length"
                            id="contract-length"
                            className={ colorTheme === 'dark' ? `form-select ${styles.input_dark}` : `form-select ${styles.input_light}` }
                            placeholder="Contract length"
                        >
                            <option value=""></option>
                            <option value="1 month">1 month</option>
                            <option value="2 months">2 months</option>
                            <option value="3 months">3 months</option>
                            <option value="1 year contract">1 year contract</option>
                            <option value="Indefinite period contract">Indefinite period contract</option>
                        </select>
                        <label htmlFor="contract-length" className={ colorTheme === 'dark' ? `${styles.label_dark}` : `${styles.label_light}` }>Contract length</label>
                    </div>
                </div>
                <div className="row g-2 mb-3">
                    <div className="col-md-3 form-floating">
                        <input
                            type="number"
                            ref={register}
                            name="salary"
                            required
                            className={ colorTheme === 'dark' ? `form-control ${styles.input_dark}` : `form-control ${styles.input_light}` }
                            id="salary"
                            placeholder="Salary"
                        />
                        <label htmlFor="salary" className={ colorTheme === 'dark' ? `${styles.label_dark}` : `${styles.label_light}` }>Salary ($)</label>
                    </div>
                    <div className="col-md-3 form-floating">
                        <select
                            ref={register}
                            name="leave_days"
                            id="leave-days"
                            className={ colorTheme === 'dark' ? `form-select ${styles.input_dark}` : `form-select ${styles.input_light}` }
                            placeholder="Leave days"
                        >
                            <option value=""></option>
                            <option value="0">No leave available</option>
                            <option value="20">20 days</option>
                            <option value="26">26 days</option>
                        </select>
                        <label htmlFor="leave-days" className={ colorTheme === 'dark' ? `${styles.label_dark}` : `${styles.label_light}` }>Available leave days</label>
                    </div>
                </div>
                <button className="btn btn-outline-success">Add employee</button>
            </form>
        </section>
    );
}

export default AddEmployeeForm;