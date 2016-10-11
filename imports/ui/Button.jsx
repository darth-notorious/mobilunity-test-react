import React, {Component, PropTypes} from 'react';

const styles = {
    background: '#999',
    borderRadius: '4px',
    border: '1px solid #666',
    padding: '.5em .5em',
    marginRight: '3em',
    cursor: 'pointer'
};

const Button = ({onClick, children}) => (
    <button style={styles} onClick={onClick}>
        {children}
    </button>
);

export default Button;