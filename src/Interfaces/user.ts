import { Todo } from './todo';

export interface User {
    id: string;
    name: string;
    profileImagePath: string;
    todos: Todo;
}