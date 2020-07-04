import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-survey-manage',
  templateUrl: './survey-manage.component.html',
  styleUrls: ['./survey-manage.component.css']
})
export class SurveyManageComponent implements OnInit {

  minDate;

  constructor() { }

  ngOnInit(): void {
    this.minDate = new Date();
  }

}
