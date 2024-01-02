import React from "react";
import "./style.css";

const Statistic = ({ title, stats }) => {
  return (
      <section className="statistics">
        <h2 className="title">{title ? title : `Upload stats`}</h2>

        <ul className="stat-list">
          {stats.map((el) => (
            <li className="item" key={el.id}>
              <span className="label">{el.label}</span>
              <span className="percentage">{el.percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
  );
};

export default Statistic;
