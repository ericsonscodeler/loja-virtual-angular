import { Component, OnInit } from '@angular/core';
import { UserModel } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'tsi-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers()
  }

  users: UserModel[] = []

  getUsers() {           
      
      this.userService.getUsers().subscribe((users: UserModel[]) => {
      this.users = users
      })
  
  }
}
