
import React from 'react';
import styles from './styles.css';

const Input = ({type, value, onChange, readOnly}) => (
    <input
        className={styles.input}
        type={type}
        value={value}
        onChange={onChange}
        readOnly
     />
);

Input.defaultProps = {
    type: 'text'
};

export default Input;