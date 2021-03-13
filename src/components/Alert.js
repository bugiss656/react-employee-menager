
const Alert = ({ type, message, handleHideAlert }) => {
    return (
        <div className={`alert alert-${type} alert-dismissible fade show position-fixed bottom-0 end-0`} role="alert">
            { message}
            <button onClick={handleHideAlert} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    );
}

export default Alert;