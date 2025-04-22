import { Component } from '@angular/core';
import { ChartData } from 'chart.js';
import { ChartjsComponent } from '@coreui/angular-chartjs';
import { RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent } from '@coreui/angular';
import { DocsCalloutComponent } from '@docs-components/public-api';
import { WidgetStatAComponent } from '@coreui/angular';
import { RouterModule } from '@angular/router';
import { DropdownModule } from '@coreui/angular';


@Component({
    selector: 'app-charts',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.scss'],
    imports: [RowComponent, ColComponent, DocsCalloutComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, ChartjsComponent, WidgetStatAComponent, RouterModule, DropdownModule]
})
export class ChartsComponent {
  data: any;
  options = {
    maintainAspectRatio: false
  };

  months = ['১০ সাতারকুল(৪১৩৪)', '৬ উত্তরা(১২০৮৭)', '৭ দক্ষিণখান(৩৬৫১)', '৮ উত্তরখান(১৫০১)', '৯ ভাটারা(২৪২৮)', 'বাজার শাখা(০)', '১ উত্তরা(৩১৯২৬)', '২ মিরপুর(৫৭১২৭)', '৩ মহাখালী(৭১৭১৯)', '৪ মিরপুর(৭০০৬১)', '৫ কারওরান বাজার(৭০০৩১)'];

  chartBarData: ChartData<'bar'> = {
    labels: [
      '১০ সাতারকুল(৪১৩৪)', '৬ উত্তরা(১২০৮৭)', '৭ দক্ষিণখান(৩৬৫১)',
      '৮ উত্তরখান(১৫০১)', '৯ ভাটারা(২৪২৮)', 'বাজার শাখা(০)',
      '১ উত্তরা(৩১৯২৬)', '২ মিরপুর(৫৭১২৭)', '৩ মহাখালী(৭১৭১৯)',
      '৪ মিরপুর(৭০০৬১)', '৫ কারওরান বাজার(৭০০৩১)'
    ],
    datasets: [
      {
        label: 'Zone wise collection',
        data: [4134, 12087, 3651, 1501, 2428, 0, 31926, 57127, 71719, 70061, 70031],
        backgroundColor: [
          '#f87979', '#f87979', '#4a90e2', '#f87979', '#f87979', '#f87979',
          '#cccccc', '#cccccc', '#cccccc', '#cccccc', '#cccccc'
        ]
      }
    ]
  };  

  chartBarOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value: number) {
            return value / 100;
          },
          stepSize: 10000, 
        },
        title: {
          display: true,
          text: 'Amount (in hundreds)'
        }
      },
      x: {
        ticks: {
          font: {
            size: 12
          }
        }
      }
    },
    plugins: {
      legend: {
        display: true
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += (context.parsed.y / 100);
            }
            return label;
          }
        }
      }
    }
  };
  
  

  chartLineData: ChartData = {
    labels: [...this.months].slice(0, 7),
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(220, 220, 220, 0.2)',
        borderColor: 'rgba(220, 220, 220, 1)',
        pointBackgroundColor: 'rgba(220, 220, 220, 1)',
        pointBorderColor: '#fff',
        data: [this.randomData, this.randomData, this.randomData, this.randomData, this.randomData, this.randomData, this.randomData]
      },
      {
        label: 'My Second dataset',
        backgroundColor: 'rgba(151, 187, 205, 0.2)',
        borderColor: 'rgba(151, 187, 205, 1)',
        pointBackgroundColor: 'rgba(151, 187, 205, 1)',
        pointBorderColor: '#fff',
        data: [this.randomData, this.randomData, this.randomData, this.randomData, this.randomData, this.randomData, this.randomData]
      }
    ]
  };

  chartLineOptions = {
    maintainAspectRatio: false
  };

  chartDoughnutData: ChartData = {
    datasets: [
      {
        backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
        data: [90, 10]
      }
    ]
  };

  // chartDoughnutOptions = {
  //   aspectRatio: 1,
  //   responsive: true,
  //   maintainAspectRatio: false,
  //   radius: '100%'
  // };

  chartPieData: ChartData = {
    labels: ['Red', 'Green', 'Yellow'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
      }
    ]
  };

  // chartPieOptions = {
  //   aspectRatio: 1,
  //   responsive: true,
  //   maintainAspectRatio: false,
  //   radius: '100%'
  // };

  chartPolarAreaData: ChartData = {
    labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
    datasets: [
      {
        data: [11, 16, 7, 3, 14],
        backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB']
      }
    ]
  };

  chartRadarData: ChartData = {
    labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
    datasets: [
      {
        label: '2020',
        backgroundColor: 'rgba(179,181,198,0.2)',
        borderColor: 'rgba(179,181,198,1)',
        pointBackgroundColor: 'rgba(179,181,198,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(179,181,198,1)',
        data: [65, 59, 90, 81, 56, 55, 40]
      },
      {
        label: '2021',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        pointBackgroundColor: 'rgba(255,99,132,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255,99,132,1)',
        data: [this.randomData, this.randomData, this.randomData, this.randomData, this.randomData, this.randomData, this.randomData]
      }
    ]
  };

  // chartRadarOptions = {
  //   aspectRatio: 1.5,
  //   responsive: true,
  //   maintainAspectRatio: false,
  // };

  get randomData() {
    return Math.round(Math.random() * 100);
  }

}
