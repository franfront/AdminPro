import { Component, Input, SimpleChanges } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [],
})
export class DonaComponent {
  @Input() title: string = 'Sin título';

  @Input('labels') public doughnutChartLabels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
  ];

  @Input('data') public data: any = [350, 450, 100];

  @Input('colors') public colors: any = ['#6857E6', '#009FEE', '#F02059']

   public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: this.data,
        backgroundColor: this.colors ,
      },
    ],
  };


  ngOnChanges(changes: SimpleChanges): void {
    this.doughnutChartData={
   
      labels: this.doughnutChartLabels,
      datasets: [
        {
          data: this.data,
          backgroundColor: this.colors,
        },
      ],
   
    }
   
  }



}
