import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {INCREMENT} from '../../actions';
import Button from '../../components/Button';
import Input from '../../components/Input';
import styles from './styles';

const mapStateToProps = (state, ownProps) => {
    return {
        count: state.currentCount,
        backgroundColor: state.backgroundColor,
        textColor: state.textColor
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        increment: () => dispatch({type: INCREMENT})
    }
};

class Counter extends Component {

    render() {
        return (
            <div
                className={styles.wrapper}
                style={{
                    backgroundColor: this.props.backgroundColor
                }}
            >
                <div className= {styles.content}>
                    <h2
                        className={styles.header}
                        style={{
                            color: this.props.textColor
                        }}
                    >
                        Count click
                    </h2>
                    <Button  onClick = {this.props.increment}>
                        Add a click
                    </Button>
                    <Input readOnly value = {this.props.count} />
                </div>
           </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);