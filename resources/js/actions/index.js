import * as api from '../api/index.js';

export const getTodos = () => async (dispatch) => {
    try {
        const { data } = await api.fetchTodos();
        let Todos = data.data;

        dispatch({ type: "FETCH_ALL", payload: Todos });
    } catch (error) {
        console.log(error);
    }
};

export const addToDo = (newTodo) => async (dispatch) => {
    try {
        const { data }  = await api.addTodo(newTodo);
        const _newTodo = data?.data;

        dispatch({ type: "ADD_TO_DO", payload: _newTodo });
    } catch (error) {
        console.log(error);
    }
}

export const deleteToDo = (id) => async (dispatch) => {
    try {
        await api.deleteTodo(id);

        dispatch({ type: "DELETE_TO_DO", payload: id });
    } catch (error) {
        console.log(error);
    }
}

export const changeStatus = (id) => async (dispatch) => {
    try {
        await api.changeTodo(id);
        dispatch(getTodos());
        dispatch({ type: "CHANGE_TO_DO_STATUS", payload: id });
    } catch (error) {
        console.log(error);
    }
}