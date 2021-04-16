import { Link } from 'react-router-dom';


const Employee = ({ id, first_name, last_name, position, address, phone_nr }) => {
    return (
        <tr>
            <th>{id}</th>
            <td>{first_name}</td>
            <td>{last_name}</td>
            <td>{position}</td>
            <td>{address}</td>
            <td>{phone_nr}</td>
            <td>
                <Link to={`/employees/${id}`}>
                    <i className="bi bi-file-earmark-person"></i>
                </Link>
            </td>
        </tr>
    );
}

export default Employee;