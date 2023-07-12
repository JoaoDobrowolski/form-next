import React from 'react';
import styles from '../styles/Home.module.css';
import { getCookie } from 'cookies-next';
import { verification } from '../services/user';

export default function Home() {
  return (
    <div className={styles.container}>
      pagina
    </div>
  );
}

// function Next - before page load - connect with Service functions / could been done with a UseEffect
export const getServerSideProps = async ({ req, res }) => {
  try {
    const token = getCookie('authorization', { req, res });
    if (!token) throw new Error('Invalid Token');

    verification(token);
    return {
      props: {}
    };
  } catch (err) {
    return {
      // go to "/login" if "/" and without the cookies of the token
      redirect: {
        permanent: false,
        destination: '/login'
      },
      props: {}
    };
  }
};