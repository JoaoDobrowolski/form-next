import React from 'react';
import styles from '../styles/Login.module.css';
import LoginCard from '../src/components/loginCard/loginCard';
import Input from '../src/components/input/input';
import Button from '../src/components/button/button';
import Link from 'next/link';

export default function Login() {
  return (
    <div className={styles.background}>
      <LoginCard title='Welcome'>
        <form className={styles.form}>
          <Input type="email" placeholder="email" />
          <Input type="password" placeholder="password" />
          <Button>Sign in</Button>
          <Link className={styles.linke} href="/register">New here? Join now</Link>
        </form>
      </LoginCard>
    </div>
  );
}