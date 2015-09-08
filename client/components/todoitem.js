import React from 'react';

class TodoItem extends React.Component {
    render() {
        var todo = this.props.todo;
        var id = this.props.id;

        return (
            <li id="todo-{id}">{todo}</li>
        );
    }
}

export default TodoItem;
