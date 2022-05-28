import FriendInfo from './FriendInfo';
import s from './FriendList.module.css';

const FriendList = ({ friendsData }) => {
  return (
    <ul className={s.list}>
      {friendsData.map(f => (
        <FriendInfo
          key={f.id}
          status={f.isOnline}
          avatar={f.avatar}
          name={f.name}
        />
      ))}
    </ul>
  );
};

export default FriendList;
