import PropTypes from 'prop-types';
import s from './FriendList.module.css';

const FriendInfo = ({ status, avatar, name }) => {
  return (
    <li className={s.item}>
      <span
        className={
          status ? `${s.status} ${s.online}` : `${s.status} ${s.offline}`
        }
      ></span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

FriendInfo.propTypes = {
  status: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendInfo;
