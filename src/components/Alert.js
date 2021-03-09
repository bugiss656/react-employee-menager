
const Alert = ({ type, message }) => {
    return (
        <div className={`alert alert-${type} alert-dismissible fade show position-fixed bottom-0 end-0`} role="alert">
            { message }
        </div>
    );
}

export default Alert;