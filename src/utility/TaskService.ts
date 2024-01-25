import axios from 'axios';
import { Task } from '../utility/Task';

const API_URL = 'https://event-ocvp.onrender.com/task';

export const getTasks = async () => {
    const response = await axios.get<Task[]>(API_URL);
    return response.data;
};

export const createTask = async (task: Task) => {
    const response = await axios.post<Task>(API_URL, task);
    return response.data;
};

export const updateTask = async (task: Task) => {
    const response = await axios.put<Task>(`${API_URL}/${task.id}`, task);
    return response.data;
};

export const deleteTask = async (id: number) => {
    await axios.delete(`${API_URL}/${id}`);
};