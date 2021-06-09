import React from 'react'
import { Table } from 'react-bootstrap';

function Datatable({ data }) {
    const columns = data[0] && Object.keys(data[0]);
    return (<Table striped bordered hover>
        <thead className='headings'>
            {/* <tr>{data[0] && columns.map(heading => <th>{heading}</th>)}</tr> */}
            <tr>
                <th>Srl. no.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Balance</th>
            </tr>
        </thead>

        <tbody className='body'>
            {data.map((row, i) => <tr>

                {/* columns.map(column => <td>{row[column]}</td>) */}
                <td>{i + 1}</td>
                <td>{row.name}</td>
                <td>{row.email}</td>
                <td>{row.contact}</td>
                <td>{row.balance}</td>
            </tr>)}
        </tbody>
    </Table>)
}

export default Datatable
