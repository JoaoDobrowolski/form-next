import React, { useState } from 'react';
import styles from '../styles/Login.module.css';
import LoginCard from '../src/components/loginCard/loginCard';
import Input from '../src/components/input/input';
import Button from '../src/components/button/button';
import Link from 'next/link';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/router';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const router = useRouter();

  const handleFormEdit = (event, name) => {
    setFormData({
      ...formData,
      [name]: event.target.value
    });
  };

  const handleForm = async (event) => {
    try {
      event.preventDefault();
      const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify(formData)
      });

      const json = await response.json();
      if (response.status !== 200) throw new Error(json);

      setCookie('authorization', json);
      router.push('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={styles.background}>
      <LoginCard title='Welcome'>
        <form onSubmit={handleForm} className={styles.form}>
          <Input
            type="email"
            placeholder="email"
            value={formData.email}
            required
            onChange={(event) => { handleFormEdit(event, 'email'); }}

          />
          <Input
            type="password"
            placeholder="password"
            value={formData.password}
            required
            onChange={(event) => { handleFormEdit(event, 'password'); }}

          />
          <Button>Sign in</Button>
          {error && <p className={styles.error}>{error}</p>}
          <Link className={styles.link} href="/register">New here? Join now</Link>
        </form>
      </LoginCard>
    </div>
  );
}