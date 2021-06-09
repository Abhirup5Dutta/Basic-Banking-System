import React from 'react'
import { Table } from 'react-bootstrap';

function Transactiontable({ data }) {
    return (<Table striped bordered hover>
        <thead className='headings'>
            <tr>
                <th>Srl. no.</th>
                <th>Sender</th>
                <th>Receiver</th>
                <th>Amount Transfer(₹)</th>
                <th>Date & Time</th>
            </tr>
        </thead>

        <tbody className='body'>
            {data.map((row, i) => <tr>
                <td>{i + 1}</td>
                <td>{row.sender}</td>
                <td>{row.receiver}</td>
                <td>{row.balance}</td>
                <td>{row.date}</td>
            </tr>)}
        </tbody>
    </Table>)
}

export default Transactiontable
