

const Settings = ({ colorTheme, setColorTheme }) => {

    const handleChangeColorTheme = () => {
        if(localStorage.getItem('theme') === 'light') {
            setColorTheme('dark');
        }else if(localStorage.getItem('theme') === 'dark') {
            setColorTheme('light');
        }
    }

    return (
        <div className="page-section">
            <h3>Settings</h3>
            <hr/>
            <div className="row">
                <div className="col-md-5">
                    <p className="lead">Change color theme:</p>
                    <div className="d-flex flex-row align-items-center color-theme-switch" onClick={() => handleChangeColorTheme()}>
                        <i className="bi bi-brightness-high"></i>
                        {colorTheme === 'dark' 
                            ? <i className="bi bi-toggle-on"></i>
                            : <i className="bi bi-toggle-off"></i>
                        }
                        <i className="bi bi-moon-fill"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Settings;