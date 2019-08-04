import { Chart } from 'chart.js';
import { waterLevelQuery, IWaterLevelData } from '../shared/models/water-level';
import { query } from './../shared/services/api-service';
import { ApolloQueryResult } from 'apollo-boost';

export class WaterLevelChart {
  private labels: Array<string> = [];
  private values: Array<number> = [];
  
  async attached() {
    await this.getData();
    this.initChart();
  }

  private async getData() {
    try {
      const { data: { waterLevels } } = await query(waterLevelQuery) as ApolloQueryResult<IWaterLevelData>;
      waterLevels.forEach(el => {
        this.labels.push(new Date(el.unixTime * 1000).toLocaleDateString('en-US'));
        this.values.push(el.value);
      });
    } catch (e) {
      throw new Error('error');
    }
  }
  private initChart() {
    const ctx: HTMLCanvasElement = document.querySelector('#water-level-chart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.labels,
        datasets : [{
          label: 'water',
          data: this.values,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false
            }
          }]
        }
      }
    });
  }
}