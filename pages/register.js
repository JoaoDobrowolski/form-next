import React from 'react';
import styles from '../styles/Login.module.css';
import LoginCard from '../src/components/loginCard/loginCard';
import Input from '../src/components/input/input';
import Button from '../src/components/button/button';
import Link from 'next/link';

export default function Register() {
  return (
    <div className={styles.background}>
      <LoginCard title='Create a new account'>
        <form className={styles.form}>
          <Input type="text" placeholder="name" />
          <Input type="email" placeholder="email" />
          <Input type="password" placeholder="password" />
          <Button>Sign Up</Button>
          <Link className={styles.linke} href="/login">Already have an account?</Link>
        </form>
      </LoginCard>
    </div>
  );
}