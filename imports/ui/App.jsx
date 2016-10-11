import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Clicks } from '../api/clicks.js';

import Button from './Button.jsx';


const styles = {
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
    },
    content: {
        textAlign: 'center'
    },
    header: {
        textTransform: 'uppercase',
        fontWeight: 300,
        color: 'rgb(97, 96, 96)'
    },
    input: {
        padding: '.5em .25em',
        borderRadius: '4px',
        border: '1px solid #222',
        textAlign: 'center',
        boxShadow: 'none'
    }
}

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        };
        
        this.increment = this.increment.bind(this);
    }
    
    increment() {
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        return (
            <div style={styles.wrapper}>
                <div style={styles.content}>
                    <h2
                        style={styles.header}
                    >
                        Count click
                    </h2>
                    <Button
                        onClick={
                       this.increment
                    }
                    >
                        Add a click
                    </Button>
                    <input type="text" value={this.state.count}  style={styles.input}/>
                </div>
            </div>
        );
    }
}

export default App;
