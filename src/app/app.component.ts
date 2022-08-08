import { User } from './../Interfaces/user';
import { UserService } from './../services/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'user-crud-app';
  userListLoading: boolean = true;

  constructor(private userService: UserService) {
  }

  users: User[];

  ngOnInit() {
    this.getUserList();
  }

  onUserUpdated(updatedUsers: any) {
    this.users = updatedUsers.users;
  }

  onUserAdded(dialogAction: any) {
    console.log(dialogAction)
    if (dialogAction.refreshList) {
       this.getUserList(); 
    }
  }

  getUserList() {
    this.userService.getUsers().subscribe((result => {
      this.users = result;
      this.userListLoading = false
    }));
  }
}
