import { mutate } from './../shared/services/api-service';
import { ApolloQueryResult } from 'apollo-boost';
import { createWaterLevelLocationMutation, INewWaterLevelLocation, IWaterLevelLocation } from '../shared/models/water-level-location';
import { bindable } from 'aurelia-framework';

export class WaterLocationForm {
  @bindable
  public waterLevelLocations: IWaterLevelLocation[] = [];

  name: string = '';

  async submit() {
    try {
      const { data: { waterLevelLocation }} = await mutate({ name: this.name }, createWaterLevelLocationMutation) as ApolloQueryResult<INewWaterLevelLocation>;
      this.waterLevelLocations.push(waterLevelLocation);
    } catch (e) {
      throw new Error('error');
    }
  };
}