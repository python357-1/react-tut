import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { findRenderedComponentWithType } from 'react-dom/test-utils';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#234',
            color: '#fff',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input 
                        type='checkbox' 
                        onChange={this.props.markComplete.bind(this, id)}
                    /> 
                    {' '}
                    {title}
                    <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>x</button>
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

const btnStyle = {
    background: '#f00',
    color: '#fff',
    border: 'none',
    padding: '5px 11px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem