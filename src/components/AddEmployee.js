import AddEmployeeForm from './AddEmployeeForm';


const AddEmployee = ({ colorTheme, handleDisplayAlert }) => {
    
    return (
        <AddEmployeeForm colorTheme={colorTheme} handleDisplayAlert={handleDisplayAlert} />
    );
}

export default AddEmployee;