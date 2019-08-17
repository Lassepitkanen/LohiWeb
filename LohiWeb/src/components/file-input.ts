import { bindable } from 'aurelia-framework';

export class FileInput {
  @bindable
  public measurementData: Object[] = [];

  private data: WaterMeasurement[] = [];
  private fileList: FileList|null = null;

  private async onSelectFile(e: Event) {
    if (this.fileList) {
      const len =  this.fileList.length;
      for (let index = 0; index < len; index++) {
        const result = await this.readFile(this.fileList[index]);
        this.data.push(...result);
      }
      this.measurementData = this.data;
    }
  }

  private readFile(file: File): Promise<WaterMeasurement[]> {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();

      fileReader.onload = e => {
        let result = e.target.result;
        result = result.replace(/[\r\n]+/g, ' ').split(' ');
        
        const len = result.length;
        const waterMeasurements = Array(len);
        for (let i = 0; i < len; i++) {
          const values = result[i].split(',');
          waterMeasurements[i] = new WaterMeasurement(values);
        }
        resolve(waterMeasurements);
      }
      fileReader.onerror = () => {
        reject([]);
        throw new Error('Error loading file');
      }
  
      fileReader.readAsText(file);
    });
  }
}

class WaterMeasurement {
  private unixTime: number|string;
  private depth: number|string;
  private heatmap: number|string;
  private lat: number|string;
  private lng: number|string;
  private alt: number|string;
  private speed: number|string;
  private heading: number|string;
  private latError: number|string;
  private lngError: number|string;
  private altError: number|string;
  private airTemp: number|string;
  private waterTemp: number|string

  constructor(values: Array<number|string>) {
    this.unixTime = values[0]
    this.depth = values[1];
    this.heatmap = values[2];
    this.lat = values[3];
    this.lng = values[4];
    this.alt = values[5];
    this.speed = values[6];
    this.heading = values[7];
    this.latError = values[8];
    this.lngError = values[9];
    this.altError = values[10];
    this.airTemp = values[11];
    this.waterTemp = values[12];
  }
}