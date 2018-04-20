import { Component, OnInit } from '@angular/core';
import { MainPageService } from '../main-page/main-page.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userCount: number;

  constructor(
    private mainPageService: MainPageService
  ) { }

  ngOnInit() {
    this.mainPageService.userCount.subscribe(
      (userCounter: number) => {
        console.log(userCounter);
        this.userCount = userCounter;
      }
    )
  }

}
