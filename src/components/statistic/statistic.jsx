import React from 'react';
import s from './style.module.css';

const Statistic = ({ title, stats }) => {
  return (
      <section className={s.statistics}>
        <h2 className={s.title}>{title ? title : `Upload stats`}</h2>

        <ul className={s.statList}>
          {stats.map((el) => (
            <li className={s.item} key={el.id}>
              <span className={s.label}>{el.label}</span>
              <span className={s.percentage}>{el.percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
  );
};

export default Statistic;
