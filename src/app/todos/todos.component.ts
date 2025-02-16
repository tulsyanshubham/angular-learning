import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../model/todo.type';
import { catchError } from 'rxjs';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit {
  todoServices = inject(TodosService);
  todoItems = signal<Array<Todo>>([]);
  ngOnInit(): void {
    this.todoServices.getTodosFromApi()
      .pipe(
        catchError((error: any) => {
          console.error('Error fetching todos', error);
          throw error;
        })
      )
      .subscribe((todos: Array<Todo>) => {
        this.todoItems.set(todos);
      })
  }
}
