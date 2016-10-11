import React, {Component, PropTypes} from 'react';
import styles from './styles.css';

const Button = ({onClick, children}) => (
    <button className={styles.button} onClick={onClick}>
        {children}
    </button>
);

export default Button;