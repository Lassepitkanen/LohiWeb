import { bindable } from 'aurelia-framework';

export class FileInput {
  @bindable
  public measurementData: Object[] = [];

  private data: Object[] = [];
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

  private readFile(file: File): Promise<object[]> {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();

      fileReader.onload = e => {
        let result = e.target.result;
        result = result.replace(/[\r\n]+/g, ' ').split(' ');
        
        const len = result.length;
        const waterMeasurements = Array(len)
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
    this.depth = values[0];
    this.heatmap = values[1];
    this.lat = values[2];
    this.lng = values[3];
    this.alt = values[4];
    this.speed = values[5];
    this.heading = values[6];
    this.latError = values[7];
    this.lngError = values[8];
    this.altError = values[9];
    this.airTemp = values[10];
    this.waterTemp = values[11];
  }
}