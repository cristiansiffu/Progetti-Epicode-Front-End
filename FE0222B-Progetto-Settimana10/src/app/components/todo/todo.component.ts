import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interface/todo';
import { TodosService } from 'src/app/service/todos.service';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {

    load!: boolean;

    constructor(public todosService: TodosService) {}

    ngOnInit() {
        this.loading();
    }

    loading(){
        this.load = true;
        setTimeout(() => {
            this.load = false;
        }, 2000);
    }

    addTodo(item: string) {
        const todo: Todo = {
            id: 1,
            title: item,
            completed: false,
        };
        this.todosService.newTodo(todo);
    }

    modify(item: string) {
        const todo: Todo = {
            id: 1,
            title: item,
            completed: false,
        };
        this.todosService.newTodo(todo);
    }

    completedTodo(todo: Todo){
        return this.todosService.getList(todo);
    }
}
