import styles from './Error.module.css';

const Error = () => {
  return (
    <>
      <h1 className={styles.errorTitle}>Error 404</h1>
      <p className={styles.errorMessage}>Esta no es la página que querías ver</p>
    </>
  );
};

export default Error;
