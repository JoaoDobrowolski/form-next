import React, { useState } from 'react';
import styles from '../styles/Login.module.css';
import LoginCard from '../src/components/loginCard/loginCard';
import Input from '../src/components/input/input';
import Button from '../src/components/button/button';
import Link from 'next/link';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/router';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
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
      const response = await fetch('/api/user/register', {
        method: 'POST',
        body: JSON.stringify(formData)
      });

      const json = await response.json();
      if (response.status !== 201) throw new Error(json);

      setCookie('authorization', json);
      router.push('/login');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={styles.background}>
      <LoginCard title='Create a new account'>
        <form onSubmit={handleForm} className={styles.form}>
          <Input
            type="text"
            placeholder="name"
            required
            value={formData.name}
            onChange={(event) => { handleFormEdit(event, 'name'); }}
          />
          <Input
            type="email"
            placeholder="email"
            required
            value={formData.email}
            onChange={(event) => { handleFormEdit(event, 'email'); }}
          />
          <Input
            type="password"
            placeholder="password"
            required
            value={formData.password}
            onChange={(event) => { handleFormEdit(event, 'password'); }}
          />
          <Button>Sign Up</Button>
          {error && <p className={styles.error}>{error}</p>}
          <Link
            className={styles.link}
            href="/login">
            Already have an account?
          </Link>
        </form>
      </LoginCard>
    </div>
  );
}