import React from "react";
import s from "./style.module.css";

const Friends = ({ props }) => {
  return (
    <ul className={s.friendList}>
      {props.map((el) => (
        <li key={el.id} className={s.friend}>
          <span
            className={`${s.status} ${el.isOnline ? s.online : s.offline}`}
          ></span>
          <img className={s.friendAvatar} src={el.avatar} alt="avatar" />
          <span className={s.name}>{el.name}</span>
        </li>
      ))}
    </ul>
  );
};

export default Friends;
