import React from 'react';
import s from './style.module.css';

const FriendsItem = ({ isOnline, name, avatar }) => {
  return (
    <li className={s.friend}>
      <span className={`${s.status} ${isOnline ? s.online : s.offline}`}></span>
      <img className={s.friendAvatar} src={avatar} alt="avatar" />
      <span className={s.name}>{name}</span>
    </li>
  );
};

export default FriendsItem;
