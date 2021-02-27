

const AddEmployee = () => {
    return (
        <section className="page-section">
            <h3>Add worker</h3>
            <hr/>
            <form className="">
                <h5>General informations:</h5>
                <div className="row g-2 mb-3">
                    <div className="col-md-3 form-floating">
                        <input type="text" className="form-control" id="first-name" placeholder="First name" />
                        <label htmlFor="first-name">First name</label> 
                    </div>
                    <div className="col-md-3 form-floating">
                        <input type="text" className="form-control" id="last-name" placeholder="Last name" />
                        <label htmlFor="last-name">Last name</label> 
                    </div>
                </div>
                <div className="row g-2 mb-3">
                    <div className="col-md-3 form-floating">
                        <input type="text" className="form-control" id="last-name" placeholder="Address" />
                        <label htmlFor="address">Address</label> 
                    </div>
                    <div className="col-md-3 form-floating">
                        <input type="text" className="form-control" id="phone-nr" placeholder="Phone number" />
                        <label htmlFor="phone-nr">Phone number</label> 
                    </div>
                </div>
                <div className="row g-2 mb-3">
                    <div className="col-md-3 form-floating">
                        <input type="email" className="form-control" id="email" placeholder="Email" />
                        <label htmlFor="email">Last name</label> 
                    </div>
                </div>  

                <h5>Work informations:</h5>
                <div className="row g-2 mb-3">
                    <div className="col-md-3 form-floating">
                        <select id="position" className="form-select" placeholder="Position">
                            <option>...</option>
                            <option>...</option>
                            <option>...</option>
                        </select>
                        <label htmlFor="position">Position</label>
                    </div>
                    <div className="col-md-3 form-floating">
                        <input type="date" className="form-control" id="employment-date" placeholder="Date of employment" />
                        <label htmlFor="employment-date">Date of employment</label> 
                    </div>
                </div>
                <div className="row g-2 mb-3">
                    <div className="col-md-3 form-floating">
                        <select id="contract-type" className="form-select" placeholder="Contract-type">
                            <option>...</option>
                            <option>...</option>
                            <option>...</option>
                        </select>
                        <label htmlFor="contract-type">Contract type</label>
                    </div>
                    <div className="col-md-3 form-floating">
                        <select id="contract-length" className="form-select" placeholder="Contract length">
                            <option>...</option>
                            <option>...</option>
                            <option>...</option>
                        </select>
                        <label htmlFor="contract-length">Contract length</label>
                    </div>
                </div>
            </form>
        </section>
    );
}

export default AddEmployee;