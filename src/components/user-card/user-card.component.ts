import { Todo } from './../../Interfaces/todo';
import { UserService } from './../../services/user.service';
import { User } from './../../Interfaces/user';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  @Output() userValuesUpdated = new EventEmitter<{ users: User[] }>();
  @Input() user: User;

  currentUserTodos: Todo[];
  newTodoName: string;
  newTodoDesc: string;
  todosAreSaving: boolean = false;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.currentUserTodos = [...this.user.todos];
  }
  
  //TODO input check missing
  addToCurrentUserTodos (currentUser: User) {
    if (this.newTodoDesc && this.newTodoName) {
      const newTodo: Todo = {
        name: this.newTodoName,
        description: this.newTodoDesc,
      }
      this.currentUserTodos.push(newTodo);
      this.saveCurrentUserTodos(currentUser);
    }
  }

  removeFromCurrentUserTodos(todoToDelete: Todo) {
    this.currentUserTodos.forEach( (todo, index) => {
      if(todo === todoToDelete) this.currentUserTodos.splice(index,1);
    });
  }

  //TODO Put would be better long term over for for todo updates
  saveCurrentUserTodos(currentUser: User) {
    this.todosAreSaving = true;
    const updatedUser: User = {
      name: currentUser.name,
      id: currentUser.id,
      todos: this.currentUserTodos,
      profileImagePath: currentUser.profileImagePath
    }
    this.userService.updateUser(updatedUser).pipe(debounceTime(500)).subscribe((result) => {
      this.userValuesUpdated.emit({users: result})
      this.todosAreSaving = false;
    });

  }
  
  deleteUser(currentUser: User) {
    this.todosAreSaving = true;
    this.userService.deleteUser(currentUser.id).subscribe((result) => {
      this.userValuesUpdated.emit({users: result})
      this.todosAreSaving = false;
    });
  }
}
