import { query } from './../shared/services/api-service';
import { ApolloQueryResult } from 'apollo-boost';
import { waterLevelLocationsQuery, IWaterLevelLocationData, IWaterLevelLocation } from '../shared/models/water-level-location';
import * as NProgress from 'nprogress';
import { Store, connectTo } from 'aurelia-store';
import { State, setWaterLevelLocationsAction } from '../shared/state/state';
import { pluck } from 'rxjs/operators';

@connectTo<State>({
  target: 'waterLevelLocations',
  selector: store => store.state.pipe(pluck('waterLevelLocations'))
})
export class WaterLocationView {
  public waterLevelLocations: IWaterLevelLocation[];

  constructor(private store: Store<State>) {
    this.store.registerAction('setWaterLevelLocationsAction', setWaterLevelLocationsAction);
  }
  
  async activate() {
    NProgress.start();
    return this.getData().then(data => {
      this.store.dispatch('setWaterLevelLocationsAction', data);
      NProgress.done();
    });
  }

  private getData(): Promise<IWaterLevelLocation[]> {
    return new Promise(async (resolve, reject) => {
      try {
        const { data: { waterLevelLocations } } = await query(waterLevelLocationsQuery) as ApolloQueryResult<IWaterLevelLocationData>;
        resolve(waterLevelLocations);
      } catch (e) {
        reject();
        throw new Error('error');
      }
    });
  }
}