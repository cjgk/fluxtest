import Dispatcher from 'dispatchers/tododispatcher';

export function createTodo(text) {
    Dispatcher.dispatch({
        actionType: 'CREATE',
        text: text
    });
}
