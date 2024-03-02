import React from 'react';

const TableFragment = ({ customer }) => {
    return (
        <tr key={customer.sno}>
            <td>{customer.customer_name}</td>
            <td>{customer.age}</td>
            <td>{customer.phone}</td>
            <td>{customer.location}</td>
            <td>{customer.created_at}</td>
        </tr>
    );
};

export default TableFragment;
