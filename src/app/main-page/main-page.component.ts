import { Component, OnInit } from '@angular/core';
import { MainPageService } from './main-page.service';

import { User } from '../users/user.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  testcount: number = 0;
  userName: string;
  department: string;
  usersCollection: string[];
  deptCollection: string[];

  constructor(private mainPageService: MainPageService) { }

  ngOnInit() {
    this.usersCollection = this.mainPageService.getUser();
    this.deptCollection = this.mainPageService.getDepartment();
  }

  onSave(data, type): void {
    this.mainPageService.saveInput(data, type);
    this.userName = '';
    this.department = '';
    if (type === 'user') {
      this.usersCollection = this.mainPageService.getUser();
    } else {
      this.deptCollection = this.mainPageService.getDepartment();
    }

    this.testcount++;
    this.mainPageService.userCount.next(this.testcount);
  }

  saveUser(userName: string, department: string): void {
    console.log('saving user');
    const user: User = {
      name: userName,
      department
    }

    this.mainPageService.storeToServer(user)
      .subscribe(
        (response) => console.log(response, 'this data is saved to firebase')
      );
  }

}
