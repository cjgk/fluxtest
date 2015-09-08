import React from 'react';

import TodoStore from 'stores/todostore';

import TodoBox from 'components/todobox.js';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: TodoStore.getAll()
        };
    }

    componentDidMount() {
        TodoStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        TodoStore.removeChangeListener(this._onChange);
    }

    render() {
        return(
            <div className="homebox">
                <TodoBox todos={this.state.todos} />
            </div>
        );
    }

    _onChange = (evt) => {
        this.setState({todos: TodoStore.getAll()});
    }
}

export default Home;
