import profileImg from '@/assets/steven.webp';
import styles from '@/styles/about/profile.module.css';

/**
 * A component that displays a profile picture
 * @returns {JSX.Element} A JSX element representing the profile picture
 */
const Profile = () => {
  return (
    <div className={styles['profile']}>
      <img
        fetchPriority="high"
        src={profileImg}
        alt="conor crutchley in salmon blazer and pink shirt with green gradient"
        width={410}
        // height={461}
      />
    </div>
  );
};

export default Profile;
