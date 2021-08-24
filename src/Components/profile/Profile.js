import styles from './Profile.module.css';
import ProfileDescription from './profileDescription/ProfileDescription';
import ProfileStats from './profileStats/ProfileStats';

const Profile = ({ user }) => {
  const { avatar, name, tag, location, stats } = user;
  return (
    <div className={styles.profile}>
      <ProfileDescription avatar={avatar} name={name} tag={tag} location={location}/>
      <ProfileStats stats={stats}/>
    </div>
  );
};

export default Profile;
