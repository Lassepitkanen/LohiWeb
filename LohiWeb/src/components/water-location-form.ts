import { mutate } from './../shared/services/api-service';
import { ApolloQueryResult } from 'apollo-boost';
import { createWaterLevelLocationMutation, IWaterLevelLocationData } from '../shared/models/water-level-location';

export class WaterLocationForm {
  name: string = '';

  async submit() {
    try {
      const { data: { waterLevelLocations } } = await mutate({ name: this.name }, createWaterLevelLocationMutation) as ApolloQueryResult<IWaterLevelLocationData>;
      console.log(waterLevelLocations);
    } catch (e) {
      throw new Error('error');
    }
  };
}