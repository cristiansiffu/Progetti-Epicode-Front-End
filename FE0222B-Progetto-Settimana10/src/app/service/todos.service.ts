import { Injectable, Inject } from '@angular/core';

import { Todo } from '../interface/todo';

@Injectable({
    providedIn: 'root',
})
export class TodosService {
    private todos: Todo[] = [];
    private completedTodos: Todo[] = [];

    public getTodos(filter: boolean): Todo[] {
        return this.todos.filter((todo) => filter === todo.completed);
    }

    public getCompletedTodos(filter: boolean): Todo[] {
        return this.completedTodos.filter((todo) => filter === todo.completed);
    }

    public newTodo(todo: Todo): Promise<Todo[]> {
        return new Promise((res, rej) => {
            setTimeout(() => {
                this.todos.push(todo);
                todo.id = this.todos.length;
                res(this.todos);
            }, 2000);
        });
    }

    public getList(todo: Todo): Promise<Todo[]> {
        return new Promise((res, rej) => {
            setTimeout(() => {
                todo.completed = true;
                this.completedTodos.push(todo);
                todo.id = this.completedTodos.length;

                const index = this.todos.indexOf(todo, 0);
                if (index > -1) {
                    this.todos.splice(index, 1);
                }
                res(this.completedTodos);
            }, 2000);
        });
    }

    public deleteTodo(todo: Todo): Promise<Todo[]> {
        return new Promise((res, rej) => {
            setTimeout(() => {
                const index = this.completedTodos.indexOf(todo, 0);
                if (index > -1) {
                    this.completedTodos.splice(index, 1);
                }
                res(this.completedTodos);
            }, 2000);
        });
    }

    checkTodoList(): number{
        return this.todos.length;
    }

    checkCompletedTodoList(): number{
        return this.completedTodos.length;
    }
}
