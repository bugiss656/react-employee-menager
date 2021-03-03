import { useForm } from "react-hook-form";

const UpdateEmployeeForm = ({ employee }) => {
    const { register, handleSubmit } = useForm({
        defaultValues: employee
    });

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <section className="page-section">
            <h3>Update profile details</h3>
            <hr />
            <form onSubmit={handleSubmit(onSubmit)}>
                <h5>General informations:</h5>
                <div className="row g-2 mb-3">
                    <div className="col-md-3 form-floating">
                        <input

                            ref={register}
                            required
                            name="first_name"
                            type="text"
                            className="form-control"
                            id="first-name"
                            placeholder="First name"
                        />
                        <label htmlFor="first-name">First name</label>
                    </div>
                    <div className="col-md-3 form-floating">
                        <input
                            ref={register}
                            required
                            name="last_name"
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
                            ref={register}
                            required
                            name="address"
                            type="text"
                            className="form-control"
                            id="address"
                            placeholder="Address"
                        />
                        <label htmlFor="address">Address</label>
                    </div>
                    <div className="col-md-3 form-floating">
                        <input
                            ref={register}
                            required
                            name="phone_nr"
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
                            ref={register}
                            required
                            name="email"
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
                            ref={register}
                            name="position"
                            id="position"
                            className="form-select"
                            placeholder="Position"
                        >
                            <option value=""></option>
                            <option value="accountant">Accountant</option>
                            <option value="dealer">Dealer</option>
                            <option value="manager">Manager</option>
                            <option value="warehouseman">Warehouseman</option>
                            <option value="customer service">Customer service</option>
                        </select>
                        <label htmlFor="position">Position</label>
                    </div>
                    <div className="col-md-3 form-floating">
                        <input
                            ref={register}
                            type="date"
                            name="employment-date"
                            className="form-control"
                            id="employment-date"
                            placeholder="Date of employment" />
                        <label htmlFor="employment-date">Date of employment</label>
                    </div>
                </div>
                <div className="row g-2 mb-3">
                    <div className="col-md-3 form-floating">
                        <select
                            ref={register}
                            name="contract_type"
                            id="contract-type"
                            className="form-select"
                            placeholder="Contract type"
                        >
                            <option value=""></option>
                            <option value="practice">Practice</option>
                            <option value="internship">Internship</option>
                            <option value="1 year contract">1 year contract</option>
                            <option value="indefinite period conract">Indefinite period conract</option>
                        </select>
                        <label htmlFor="contract-type">Contract type</label>
                    </div>
                </div>
                <button className="btn btn-outline-success">Add employee</button>
            </form>
        </section>
    );
}

export default UpdateEmployeeForm;