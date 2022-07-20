import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.scss']
})
export class StatComponent implements OnInit {

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [];
  public pieChartData: SingleDataSet = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  pieColors = [
    {
      backgroundColor: [
        '#75d5e3',
        '#3b3a30',
        '#Salmon',
        '#c0ded9',
        '#b2c2bf',
        '#eaece5'

      ]
    },
  ];



  public polarAreaChartOptions: ChartOptions = {
    responsive: true,
  };
  public polarAreaChartLabels: Label[] = [ 'Red', 'Green', 'Yellow', 'Grey', 'Dark Grey'];
  public polarAreaChartData: SingleDataSet = [];
  public poalrAreaChartType: ChartType = 'polarArea';
  public polarAreaChartLegend = true;
  public polarAreaChartPlugins = [];
  polarAreaChartColors = [
    {
      backgroundColor: [
        'rgba(219, 0, 0, 0.1)',
        'rgba(0, 165, 2, 0.1)',
        'rgba(255, 195, 15, 0.2)',
        'rgba(55, 59, 66, 0.1)',
        'rgba(0, 0, 0, 0.3)'
      ],
      hoverBackgroundColor: [
        'rgba(219, 0, 0, 0.2)',
        'rgba(0, 165, 2, 0.2)',
        'rgba(255, 195, 15, 0.3)',
        'rgba(55, 59, 66, 0.1)',
        'rgba(0, 0, 0, 0.4)'
      ]
    },
  ];



  barChartColors = [
    {
      backgroundColor: [
        '#bccad6',
        '#8d9db6',
        '#667292',
        '#f1e3dd',
        '#a2836e',
        '#fff2df '

      ]
    },
  ];
  
  donutColors = [
    {
      backgroundColor: [
        '#fff2df',
        '#d9ad7c',
        '#a2836e',
        '#674d3c',
        '#fbefcc',
        'Moccasin'

      ]
    },
  ];

  public barChartLabels: Label[] = [];
  public barChartData: SingleDataSet = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  chartColors = [
    {
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ]
    },
  ];

  public doughnutChartLabels: Label[] = [];
  public doughnutChartData: SingleDataSet = [];
  public doughnutChartType: ChartType = 'doughnut';

  public radarChartLabels: Label[] = [];
  public radarChartData: SingleDataSet = [];
  public radarChartType: ChartType = 'radar';

  constructor(private accountService:AccountService) {

    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
   }

  ngOnInit(): void {
 
    this.accountService.getAccount().subscribe(value => {
      value.forEach(account => {
        this.pieChartLabels.push(account.area)
          this.pieChartData.push(account.score);
          console.log(account.score);
        })

      });



      this.accountService.getAccount().subscribe(value => {
        value.forEach(account => {
          this.barChartLabels.push(account.area)
            this.barChartData.push(account.score);
            console.log(account.score);
          })
  
        });


        this.accountService.getAccount().subscribe(value => {
          value.forEach(account => {
            this.radarChartLabels.push(account.area)
              this.radarChartData.push(account.score);
              console.log(account.score);
            })
    
          });


          this.accountService.getAccount().subscribe(value => {
            value.forEach(account => {
              this.doughnutChartLabels.push(account.area)
                this.doughnutChartData.push(account.score);
                console.log(account.score);
              })
      
            });
        

}

}
