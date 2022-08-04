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

  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

  //TODO input check missing
  setCurrentUserTodos (currentUser: User) {
    this.currentUserTodos = [...currentUser.todos];

    if (this.newTodoDesc.length > 0 && this.newTodoName.length > 0) {
      const newTodo: Todo = {name: this.newTodoName, description: this.newTodoDesc}
      this.currentUserTodos.push(newTodo);
    }
    this.addNewTodo(currentUser);
  }

  //TODO Put would be better long term over for for todo updates
  addNewTodo(currentUser: User) {
    const updatedUser: User = {
      name: currentUser.name,
      id: currentUser.id,
      todos: this.currentUserTodos,
      profileImagePath: currentUser.profileImagePath
    }
    this.userService.updateUser(updatedUser).pipe(debounceTime(500)).subscribe((result) => {
      this.userValuesUpdated.emit({users: result})
    });

  }
  
  deleteUser(currentUser: User) {
    //TODO add logic for user delete
  }
}
