import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AddEmployee = ({ handleDisplayAlert }) => {
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [phone_nr, setPhoneNr] = useState('');
    const [email, setEmail] = useState('');
    const [position, setPosition] = useState('');
    const [employment_date, setEmploymentDate] = useState('');
    const [contract_type, setContractType] = useState('');
    const [contract_length, setContractLength] = useState('');
    const [salary, setSalary] = useState('');
    const [leave_days, setLeaveDays] = useState('');
    const history = useHistory();


    const handleSubmit = (e) => {
        e.preventDefault();

        const employee = {
            first_name,
            last_name,
            address,
            phone_nr,
            email,
            position,
            employment_date,
            contract_type,
            contract_length,
            salary,
            leave_days
        };

        fetch('http://localhost:5000/employees', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(employee)
        }).then(() => {
            console.log("New employee added...");
            history.push('/employees');
            handleDisplayAlert('success', 'New employee succesfully added.', true);
        })
    }

    return (
        <section className="page-section">
            <h3>Add worker</h3>
            <hr />
            <form onSubmit={handleSubmit}>
                <h5>General informations:</h5>
                <div className="row g-2 mb-3">
                    <div className="col-md-3 form-floating">
                        <input
                            onChange={(e) => setFirstName(e.target.value)}
                            value={first_name}
                            required
                            type="text"
                            className="form-control"
                            id="first-name"
                            placeholder="First name"
                        />
                        <label htmlFor="first-name">First name</label>
                    </div>
                    <div className="col-md-3 form-floating">
                        <input
                            onChange={(e) => setLastName(e.target.value)}
                            value={last_name}
                            required
                            type="text"
                            className="form-control"
                            id="last-name"
                            placeholder="Last name"
                        />
                        <label htmlFor="last-name">Last name</label>
                    </div>
                </div>
                <div className="row g-2 mb-3">
                    <div className="col-md-3 form-floating">
                        <input
                            onChange={(e) => setAddress(e.target.value)}
                            value={address}
                            required
                            type="text"
                            className="form-control"
                            id="address"
                            placeholder="Address"
                        />
                        <label htmlFor="address">Address</label>
                    </div>
                    <div className="col-md-3 form-floating">
                        <input
                            onChange={(e) => setPhoneNr(e.target.value)}
                            value={phone_nr}
                            required
                            type="text"
                            className="form-control"
                            id="phone-nr"
                            placeholder="Phone number"
                        />
                        <label htmlFor="phone-nr">Phone number</label>
                    </div>
                </div>
                <div className="row g-2 mb-3">
                    <div className="col-md-3 form-floating">
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Email"
                        />
                        <label htmlFor="email">Email</label>
                    </div>
                </div>

                <h5>Work informations:</h5>
                <div className="row g-2 mb-3">
                    <div className="col-md-3 form-floating">
                        <select
                            onChange={(e) => setPosition(e.target.value)}
                            value={position}
                            id="position"
                            className="form-select"
                            placeholder="Position"
                        >
                            <option value=""></option>
                            <option value="Accountant">Accountant</option>
                            <option value="Dealer">Dealer</option>
                            <option value="Manager">Manager</option>
                            <option value="Warehouseman">Warehouseman</option>
                            <option value="Customer service">Customer service</option>
                        </select>
                        <label htmlFor="position">Position</label>
                    </div>
                    <div className="col-md-3 form-floating">
                        <input
                            onChange={(e) => setEmploymentDate(e.target.value)}
                            value={employment_date}
                            type="date"
                            className="form-control"
                            id="employment-date"
                            placeholder="Date of employment" />
                        <label htmlFor="employment-date">Date of employment</label>
                    </div>
                </div>
                <div className="row g-2 mb-3">
                    <div className="col-md-3 form-floating">
                        <select
                            onChange={(e) => setContractType(e.target.value)}
                            value={contract_type}
                            id="contract-type"
                            className="form-select"
                            placeholder="Contract type"
                        >
                            <option value=""></option>
                            <option value="Practice">Practice</option>
                            <option value="Internship">Internship</option>
                            <option value="Employment contract">Employment contract</option>
                            <option value="Mandatory contract">Mandatory contract</option>
                            <option value="Business-to-business">Business-to-business</option>
                        </select>
                        <label htmlFor="contract-type">Contract type</label>
                    </div>
                    <div className="col-md-3 form-floating">
                        <select
                            onChange={(e) => setContractLength(e.target.value)}
                            value={contract_length}
                            id="contract-length"
                            className="form-select"
                            placeholder="Contract length"
                        >
                            <option value=""></option>
                            <option value="1 month">1 month</option>
                            <option value="2 months">2 months</option>
                            <option value="3 months">3 months</option>
                            <option value="1 year contract">1 year contract</option>
                            <option value="Indefinite period contract">Indefinite period contract</option>
                        </select>
                        <label htmlFor="contract-length">Contract length</label>
                    </div>
                </div>
                <div className="row g-2 mb-3">
                    <div className="col-md-3 form-floating">
                        <input
                            type="number"
                            onChange={(e) => setSalary(e.target.value)}
                            value={salary}
                            required
                            className="form-control"
                            id="salary"
                            placeholder="Salary"
                        />
                        <label htmlFor="salary">Salary ($)</label>
                    </div>
                    <div className="col-md-3 form-floating">
                        <select
                            onChange={(e) => setLeaveDays(e.target.value)}
                            value={leave_days}
                            id="leave-days"
                            className="form-select"
                            placeholder="Leave days"
                        >
                            <option value=""></option>
                            <option value="0">No leave available</option>
                            <option value="20">20 days</option>
                            <option value="26">26 days</option>
                        </select>
                        <label htmlFor="leave-days">Available leave days</label>
                    </div>
                </div>
                <button className="btn btn-outline-success">Add employee</button>
            </form>
        </section>
    );
}

export default AddEmployee;