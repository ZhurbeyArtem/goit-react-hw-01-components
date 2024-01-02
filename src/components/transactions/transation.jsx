import React from 'react';
import s from './style.module.css'

const Transation = ({ props }) => {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr className={s.tableHeader}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {props.map((el) => (
          <tr key={el.id} className={s.tableItem}>
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
