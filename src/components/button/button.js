import React from 'react';
import styles from './button.module.css';
import PropTypes from 'prop-types';

export default function Button({ children, ...props }) {
  return (
    <button type="button" className={styles.button} {...props}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};