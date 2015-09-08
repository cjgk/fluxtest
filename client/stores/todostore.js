import Dispatcher from 'dispatchers/tododispatcher';
import EventEmitter from 'events';

let _todos = [];

function createTodo(text) {
    _todos.push(text);
}

class TodoStore extends EventEmitter {
    constructor() {
        super();
    }

    emitChange() {
        this.emit('CHANGE');
    }

    addChangeListener(callback) {
        this.on('CHANGE', callback);
    }

    removeChangeListener(callback) {
        this.removeListener('CHANGE', callback);
    }

    getAll() {
        return _todos;
    }
}

let todoStoreInstance = new TodoStore();

todoStoreInstance.dispatchToken = Dispatcher.register(action => {
    var text;

    switch (action.actionType) {
        case 'CREATE':
            text = action.text.trim();
            createTodo(text);
            break;
    }
    
    todoStoreInstance.emitChange();
});

export default todoStoreInstance;
