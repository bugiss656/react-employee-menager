

const Employee = ({ id, first_name, last_name, position, address, phone_nr }) => {
    return (
        <tr>
            <th>{id}</th>
            <td>{first_name}</td>
            <td>{last_name}</td>
            <td>{position}</td>
            <td>{address}</td>
            <td>{phone_nr}</td>
        </tr>
    );
}

export default Employee;