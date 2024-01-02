import React from "react";
import './style.css'

const Transation = ({ props }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr className="table-header">
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {props.map((el) => (
          <tr key={el.id} className="table-item">
            <td>{el.type}</td>
            <td>{el.amount}</td>
            <td>{el.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Transation;
