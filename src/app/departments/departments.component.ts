import { Component, OnInit } from '@angular/core';
import { MainPageService } from '../main-page/main-page.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  deptCollection: string[];

  constructor(private mainPageService: MainPageService) { }

  ngOnInit() {
    this.deptCollection = this.mainPageService.getDepartment();
  }

}
