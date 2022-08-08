import { UserService } from './../../services/user.service';
import { Todo } from './../../Interfaces/todo';
import { User } from './../../Interfaces/user';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-user-dialog',
  templateUrl: './add-user-dialog.component.html',
  styleUrls: ['./add-user-dialog.component.scss']
})
export class AddUserDialogComponent implements OnInit {
  @Output() DialogAction = new EventEmitter<{ showAddUserDialog: boolean, refreshList: boolean }>();

  newUserName: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  closeAddUserDialog() {
    this.DialogAction.emit({showAddUserDialog: false, refreshList: false})
  }

  addUser() {
    if(this.newUserName) {
      const newTodos: Todo[] = [];
      const newUser: User = {
        id: "0",
        name: this.newUserName,
        profileImagePath: "randomPath",
        todos: newTodos,
      }

      this.userService.createUser(newUser).subscribe((result) => {
        this.DialogAction.emit({showAddUserDialog: false, refreshList: true})
      })
    }
  }

}
