import { bindable } from 'aurelia-framework';
import { IWaterLevelLocation } from '../shared/models/water-level-location';

export class WaterLocationTable {
  @bindable
  public waterLevelLocations: IWaterLevelLocation[] = [];

  private delete(id: number) {
    console.log(id);
  }
}