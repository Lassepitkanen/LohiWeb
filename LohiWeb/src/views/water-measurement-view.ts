import { bindable } from 'aurelia-framework';

export class WaterMeasurementView {
  @bindable
  public selectedLocationId: number|undefined;
  @bindable
  public measurementData: Object[];

  saveToDb() {
    console.log(this.selectedLocationId);
    console.log(this.measurementData);
  }
}
