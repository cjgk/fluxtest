import React from 'react';
import TodoItem from 'components/todoitem';
import TodoForm from 'components/todoform';
import TodoActions from 'actions/todoactioncreators';

class TodoBox extends React.Component {

    getTodoItems(todos) {
        var listItems = [];

        if (todos.length < 1) {
            return listItems;
        }

        
        for (var key in todos) {
            listItems.push(<TodoItem key={key} todo={todos[key]} />); 
        }

        return listItems;

    }

    render() {
        
        var todoItems = this.getTodoItems(this.props.todos);
        
        return (
                <div>
                    <TodoForm />
                    <ul>
                        {todoItems}
                    </ul>
                </div>
        );
    }
}

export default TodoBox;
