import React from 'react';
import s from './style.module.css'

const Profile = ({ props }) => {
  const { username, tag, location, avatar, followers, views, likes } = props;
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt='User avatar' className={s.avatar} />
        <p className={s.name}>{username}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{followers}</span>
        </li>
        <li>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{views}</span>
        </li>
        <li>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
