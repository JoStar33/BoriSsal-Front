import Link from 'next/link';
import React from 'react';
import styles from './login_button.module.scss';

const LoginButton = () => {
  return (
    <div className={styles.login_button_container}>
      <Link
        href="/login">
        <button className={styles.login_button}>Login</button>
      </Link>
    </div>
  );
};

export default LoginButton;