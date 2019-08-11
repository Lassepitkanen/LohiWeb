import { bindable } from 'aurelia-framework';
import { mutate } from './../shared/services/api-service';
import { ApolloQueryResult } from 'apollo-boost';
import { deleteWaterLevelLocation, IWaterLevelLocationData, IWaterLevelLocation } from '../shared/models/water-level-location';
import { IIdModel } from '../shared/models/id-model';

export class WaterLocationTable {
  @bindable
  public waterLevelLocations: IWaterLevelLocation[] = [];

  private async delete(locationId: number) {
    try {
      const { data: data  } = await mutate({ id: locationId }, deleteWaterLevelLocation) as ApolloQueryResult<IIdModel>;
      const index = this.waterLevelLocations.findIndex(el => el.id === data.id);
      if (index !== -1) {
        this.waterLevelLocations.splice(index, 1);
      }
    } catch (e) { 
      throw new Error('error');
    }
  }
}