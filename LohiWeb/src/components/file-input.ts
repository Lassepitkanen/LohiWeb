import { bindable } from 'aurelia-framework';


export class FileInput {
  @bindable
  public measurementData: Object[] = [];

  private data: Object[] = [];
  private fileList: FileList|null = null;
  private names: string[] = ['unixTime', 'depth', 'heatmap', 'lat', 'lng', 'alt', 'speed', 'heading', 'latError', 'lngError', 'altError', 'airTemp', 'waterTemp'];

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
        
        result = result.map((row: string) => {
          let obj = Object.assign({}, row.split(','));
          this.names.forEach((name, index) => {
            const oldProp = Object.getOwnPropertyDescriptor(obj, index) as PropertyDescriptor;
            if (oldProp) {
              Object.defineProperty(obj, name, oldProp);
              delete obj[index];
            }
          });
          return obj;
        });
        
        resolve(result);
      }
      fileReader.onerror = () => {
        reject([]);
        throw new Error('Error loading file');
      }
  
      fileReader.readAsText(file);
    });
  }
}