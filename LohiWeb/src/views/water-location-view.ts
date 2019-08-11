import { query } from './../shared/services/api-service';
import { ApolloQueryResult } from 'apollo-boost';
import { waterLevelLocationsQuery, IWaterLevelLocationData, IWaterLevelLocation } from '../shared/models/water-level-location';
import * as NProgress from 'nprogress';

export class WaterLocationView {
  public waterLevelLocations: IWaterLevelLocation[] = [];
  
  async activate() {
    NProgress.start();
    return this.getData().then(() => {
      NProgress.done();
    });
  }

  private getData(): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const { data: { waterLevelLocations } } = await query(waterLevelLocationsQuery) as ApolloQueryResult<IWaterLevelLocationData>;
        this.waterLevelLocations = waterLevelLocations;
        resolve();
      } catch (e) {
        reject();
        throw new Error('error');
      }
    });
  }
}