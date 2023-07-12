import React from 'react';
import styles from './loginCard.module.css';
import PropTypes from 'prop-types';

export default function LoginCard({ title, children }) {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </div>
  );
}

LoginCard.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
};