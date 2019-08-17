import { bindable } from 'aurelia-framework';

export class FileInput {
  @bindable
  public measurementData: Object[] = [];

  private data: WaterMeasurement[] = [];
  private fileList: FileList|null = null;

  private async onSelectFile(e: Event) {
    if (this.fileList) {
      this.data = [];
      for (let index = 0; index < this.fileList.length; index++) {
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
        console.log(waterMeasurements);
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
  private unixTime: [Number, String];
  private depth: [Number, String];
  private heatmap: [Number, String];
  private lat: [Number, String];
  private lng: [Number, String];
  private alt: [Number, String];
  private speed: [Number, String];
  private heading: [Number, String];
  private latError: [Number, String];
  private lngError: [Number, String];
  private altError: [Number, String];
  private airTemp: [Number, String];
  private waterTemp: [Number, String]

  constructor(values: Array<[Number, String]>) {
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