import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../model/todo.type';
import { catchError } from 'rxjs';
import { TodoItemComponent } from '../components/todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';
import { FilterTodosPipe } from '../pipes/filter-todos.pipe';

@Component({
  selector: 'app-todos',
  imports: [TodoItemComponent,FormsModule,FilterTodosPipe],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit {

  todoServices = inject(TodosService);

  todoItems = signal<Array<Todo>>([]);

  searchTerm = signal('');

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

  updateItem(todoItem : Todo) {
    this.todoItems.update((todos) => {
      return todos.map(todo=>{
        if(todo.id === todoItem.id){
          todo.completed = !todo.completed;
        }
        return todo;
      })
    })
  }
}
