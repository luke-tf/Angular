import { Component, OnInit } from '@angular/core';
import { Users } from './users';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: 'users.component.html'
})
export class UsersComponent implements OnInit {

  constructor(private usersService: UsersService) { }

  public users: Users[];

  ngOnInit() {
    this.usersService.getUsers()
      .subscribe(
        users => {
          this.users = users;
          console.log(users);          
        },
        error => console.log(error)
      );
  }
}