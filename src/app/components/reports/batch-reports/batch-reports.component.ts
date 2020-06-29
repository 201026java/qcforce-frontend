import { Component, OnInit } from '@angular/core';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { ChartDataSets, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-batch-reports',
  templateUrl: './batch-reports.component.html',
  styleUrls: ['./batch-reports.component.css']
})
export class BatchReportsComponent implements OnInit {

  weeklyInfo = 'Reports By Week';
  weekDisplayed = false;

  public lineChartData: ChartDataSets[] = [
    { data: [3.25, 2, 5, 4, 3, 5, 1], label: 'Batch 1'},
    { data: [2.47, 3.81, 4.81, 2.11, 4.13, 3.51, 1.89], label: 'Batch 2'},
    { data: [2.47, 3.81, 4.81, 2.11, 4.13, 3.51, 1.89], label: 'Batch 3'}
  ];
  public lineChartLabels: Label[] = ['Question 1', 'Question 2', 'Question 3', 'Question 4', 'Question 5', 'Question 6', 'Question 7'];
  public lineChartOptions = {
    responsive: true,
  };
  public lineChartColor: Color[] =[
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,110,0,1)',
    },
    {
      borderColor: 'black',
      backgroundColor: 'rgba(200,255,0,1)',
    },
    {
      borderColor: 'black',
      backgroundColor: 'rgba(100, 200, 155,1)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'bar';
  public lineChartPlugins = [];

  public doughnutChartLabels: Label[] = ['Too fast', 'Too slow', 'Good'];
  public doughnutChartData: MultiDataSet  = [
      [6, 1, 2],
  ];

  public doughnutChartColor: Color[] = [
    {
      borderColor: 'gray',
      backgroundColor: [
        'rgba(255, 70, 70, 1)',
        'rgba(200, 255, 0, 1)',
        'rgba(100, 200, 100, 1)',
      ]
    }
  ];

  public doughnutChartLegend = true;
  public doughnutChartType = 'doughnut';


  constructor() { }

  ngOnInit(): void {
  }

  toggleWeek(){
    this.weekDisplayed = true;
  }
}
