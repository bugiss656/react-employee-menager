import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';



const Reports = () => {
    const [salaryChartData, setSalaryChartData] = useState({});
    const [salaryChartOptions, setSalaryChartOptions] = useState({});

    const [leaveDaysChartData, setleaveDaysChartData] = useState({});
    const [leaveDaysChartOptions, setLeaveDaysChartOptions] = useState({});
    

    const handleEmployeesSalaryChart = () => {
        const results = [];

        fetch('http://localhost:5000/employees?_sort=salary&_order=desc')
            .then(res => {
                return res.json();
            })
            .then(data => {
                data.forEach(employee => {
                    results.push({
                        first_name: employee.first_name,
                        last_name: employee.last_name,
                        salary: employee.salary
                    })
                })

                const employees_names = results.map(employee => (`${employee.first_name} ${employee.last_name}`));
                const salaries = results.map(employee => employee.salary);

                setSalaryChartData({
                    labels: employees_names,
                    datasets: [{
                        label: 'Salary ($)',
                        data: salaries,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderWidth: 3
                    }],
                })

                setSalaryChartOptions({
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    },
                    responsive: true
                })
            })
    }


    const handleEmployeesLeaveDaysChart = () => {
        const results = [];

        fetch('http://localhost:5000/employees?_sort=leave_days&_order=desc')
            .then(res => {
                return res.json();
            })
            .then(data => {
                data.forEach(employee => {
                    results.push({
                        first_name: employee.first_name,
                        last_name: employee.last_name,
                        leave_days: employee.leave_days
                    })
                })

                const employees_names = results.map(employee => (`${employee.first_name} ${employee.last_name}`));
                const leave_days = results.map(employee => employee.leave_days);

                setleaveDaysChartData({
                    labels: employees_names,
                    datasets: [{
                        label: 'Leave days',
                        data: leave_days,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderWidth: 3
                    }],
                })

                setLeaveDaysChartOptions({
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    },
                    responsive: true
                })
            })
    }


    useEffect(() => {
        handleEmployeesSalaryChart();
        handleEmployeesLeaveDaysChart();
    }, []);


    return (
        <div className="page-section">
            <h3>Reports</h3>
            <hr />
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <h5 className="lead">Employees by month salary</h5>
                    <Bar data={salaryChartData} options={salaryChartOptions} />
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <h5 className="lead">Employees by by available leave days</h5>
                    <Bar data={leaveDaysChartData} options={leaveDaysChartOptions} />
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    
                </div>
            </div>
        </div>
    );
}

export default Reports;