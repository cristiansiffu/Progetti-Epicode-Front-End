import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interface/todo';
import { TodosService } from 'src/app/service/todos.service';

@Component({
    selector: 'app-completed',
    templateUrl: './completed.component.html',
    styleUrls: ['./completed.component.scss'],
})
export class CompletedComponent implements OnInit {

    load!: boolean;

    constructor(public todosService: TodosService) {}

    ngOnInit(): void {
        this.loading();
    }

    loading(){
        this.load = true;
        setTimeout(() => {
            this.load = false;
        }, 2000);
    }

    checkList(): number {
        return this.todosService.checkCompletedTodoList();
    }

    remove(todo: Todo) {
        return this.todosService.deleteTodo(todo);
    }
}
