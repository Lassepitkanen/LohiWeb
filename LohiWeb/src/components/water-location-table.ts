import { mutate } from './../shared/services/api-service';
import { ApolloQueryResult } from 'apollo-boost';
import { deleteWaterLevelLocation, IWaterLevelLocation } from '../shared/models/water-level-location';
import { IIdModel } from '../shared/models/id-model';
import { connectTo, Store } from 'aurelia-store';
import { State, deleteWaterLevelLocationAction } from '../shared/state/state';
import { pluck } from 'rxjs/operators';

@connectTo<State>({
  target: 'waterLevelLocations',
  selector: store => store.state.pipe(pluck('waterLevelLocations'))
})
export class WaterLocationTable {
  public waterLevelLocations: IWaterLevelLocation[];

  constructor(private store: Store<State>) {
    this.store.registerAction('deleteWaterLevelLocationAction', deleteWaterLevelLocationAction);
  }

  private async delete(locationId: number) {
    try {
      const { data: data  } = await mutate({ id: locationId }, deleteWaterLevelLocation) as ApolloQueryResult<IIdModel>;
      const index = this.waterLevelLocations.findIndex(el => el.id === data.id);
      if (index !== -1) {
        this.store.dispatch('deleteWaterLevelLocationAction', index);
      }
    } catch (e) { 
      throw new Error('error');
    }
  }

  waterLevelLocationsChanged(newState: State, oldState: State) {
    this.waterLevelLocations = newState.waterLevelLocations;
  }
}