import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MainPageService {
  private baseUrl: string = 'https://angular5-91f56.firebaseio.com/data/users.json';
  userCount = new Subject();
  private users: string[] = [];
  private department: string[] = [];

  constructor(private http: Http) {}

  saveInput(data, type): void {
    if (type === 'user') {
      this.users.push(data);
    } else {
      this.department.push(data);
    }
  }

  getUser(): string[] {
    return [...this.users];
  }

  getDepartment(): string[] {
    return [...this.department];
  }

  storeToServer(user: User): string[] {
    return this.http.post(this.baseUrl, user);
  }

  getUserFromServer(): void {
    return this.http.get('https://angular5-91f56.firebaseio.com/data/users.json')
      .map(
        (response: Response) => response.json()
      );
  }

}
