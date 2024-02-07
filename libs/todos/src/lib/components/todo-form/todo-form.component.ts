import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { TodosActions, TodosEntity } from '@esol/todos';

@Component({
  selector: 'esol-todo-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css',
})
export class TodoFormComponent {
  form : FormGroup;
  originalTodo: TodosEntity | undefined;

  constructor(private fb : FormBuilder, private store : Store){
    this.form = this.fb.group({
      title: ['', Validators.required]
    })
  }

  @Input() set todo(todo: TodosEntity | null | undefined) {
    this.form.reset();
    this.originalTodo = undefined;

    if (todo) {
      this.form.setValue({
        title: todo.title,
      });

      this.originalTodo = todo;
    }
  }

  onSubmit(){
    if(this.originalTodo){
      this.store.dispatch(TodosActions.updateTodo({todoId : this.originalTodo?.id ?? '' , changes : this.form.value}))
    } else {
      const todo : TodosEntity = {...this.form.value, completed: false}
      this.store.dispatch(TodosActions.createTodo({todo}));
      this.form.reset()

    }
  }
}
