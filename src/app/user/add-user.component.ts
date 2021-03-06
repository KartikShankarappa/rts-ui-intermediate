import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './user.model';
import { UserService } from './user.service';

@Component({
  selector: 'add',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class AddUserComponent {

  user: User = new User();

  constructor(private router: Router, private userService: UserService) {

  }

  createUser(): void {
    this.userService.createUser(this.user)
        .subscribe( data => {
          alert("User created successfully.");
        });

  };

}