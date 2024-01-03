import React from 'react'
import s from './style.module.css';

const FriendsItem = ({ props }) => {
  const {id, isOnline, name, avatar} = props
  return (
    <li key={id} className={s.friend}>
      <span
        className={`${s.status} ${isOnline ? s.online : s.offline}`}
      ></span>
      <img className={s.friendAvatar} src={avatar} alt="avatar" />
      <span className={s.name}>{name}</span>
    </li>
  );
}

export default FriendsItem
