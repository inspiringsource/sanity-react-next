import { useRouter } from 'next/router';
import styles from '../styles/Toolbar.module.css';

export const Toolbar = () => {
  const router = useRouter();

  return (
    <div className={styles.main}>
      <div onClick={() => router.push('/')}>Events</div>
      <div onClick={() => window.location.href = 'https://inspiringsource.net/'}>Home</div>
      <div onClick={() => window.location.href = 'https://github.com/inspiringsource'}>GitHub</div>
    </div>
  );
};