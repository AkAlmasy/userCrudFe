import { UserService } from './../../services/user.service';
import { User } from './../../Interfaces/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  title = 'user-crud-app';
  users: User[];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUsers().subscribe((result => {
      console.log(result);
      this.users = result;
      console.log(this.users);
    }));
  }

}
