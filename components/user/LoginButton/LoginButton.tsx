import Link from "next/link";
import styles from "./login_button.module.scss";

const LoginButton = () => {
  return (
    <div className={styles.login_button_container}>
      <Link href="/login" aria-label="로그인 페이지로 이동">
        <button aria-label="로그인 페이지로 이동" className={styles.login_button}>Login</button>
      </Link>
    </div>
  );
};

export default LoginButton;
