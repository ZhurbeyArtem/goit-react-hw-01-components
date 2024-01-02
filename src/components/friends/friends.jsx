import React from "react";
import "./style.css";

const Friends = ({ props }) => {
  return (
    <ul className="friend-list">
      {props.map((el) => (
        <li key={el.id} className="friend">
          <span className={`status ${el.isOnline ? "online" : "offline"}`}></span>
          <img className="friend-avatar" src={el.avatar} alt="avatar" />
          <span className="name">{el.name}</span>
        </li>
      ))}
    </ul>
  );
};

export default Friends;
