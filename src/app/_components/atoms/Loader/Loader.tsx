import Image from 'next/image';
import styles from './Loader.module.scss';

const Loader = () => (
  <div className={styles.wrapper}>
    <Image className={styles.logo} src="/yxir.png" alt="Yxir EDF Logo" width={300} height={130} />
  </div>
);

export default Loader;
