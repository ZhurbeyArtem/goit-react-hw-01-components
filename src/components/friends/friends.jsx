import React from "react";
import s from "./style.module.css";
import FriendsItem from "./friends.item";

const Friends = ({ props }) => {
  return (
    <ul className={s.friendList}>
      {props.map((el) => (
       <FriendsItem props={{id: el.id, isOnline: el.isOnline, name: el.name, avatar: el.avatar}} />
      ))}
    </ul>
  );
};

export default Friends;
