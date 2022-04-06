import axios from 'axios';

axios.defaults.baseURL = process.env.MIX_APP_URL;

const API = axios.create({ baseURL: process.env.MIX_APP_UR});

export const fetchTodos = () => {
    return API.get('/tasks')
};
export const addTodo = (newTodo) => {
    return API.post(`/tasks`,newTodo);
};
export const deleteTodo = (id) => API.delete(`/tasks/${id}`);
export const changeTodo = (id) => {
    return API.post(`/tasks/${id}`);
};