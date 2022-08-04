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

  constructor(private userService: UserService) {
  }

  users: User[];

    ngOnInit() {
    this.userService.getUsers().subscribe((result => {
      this.users = result;
    }));
  }

  onUserUpdated(updatedUsers: any) {
    this.users = updatedUsers.users;
  }
}
