import React from 'react';
import * as TodoActions from 'actions/todoactioncreators';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            value: ''
        }
    }

    _onSubmit = (evt) => {
        evt.preventDefault();

        TodoActions.createTodo(this.state.value);
    }

    _onChange = (evt) => {
        this.setState({value: evt.target.value});
    }
    

    render() {
        return (
            <form onSubmit={this._onSubmit}>
                <input type="text" id="newTodo" onChange={this._onChange} />
            </form>
        );
    }

}

export default TodoForm;
