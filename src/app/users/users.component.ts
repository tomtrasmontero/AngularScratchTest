import { Component, OnInit } from '@angular/core';
import { MainPageService } from '../main-page/main-page.service';

import { User } from './user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  usersCollection: User[] = [];

  constructor(private mainPageService: MainPageService) { }

  ngOnInit() {
    // this.usersCollection = this.mainPageService.getUser();
    this.mainPageService.getUserFromServer()
      .subscribe(
        (response) => {
          this.usersCollection = Object.values(response)
        }
      )
  }

}
