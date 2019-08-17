import { bindable } from 'aurelia-framework';
import { connectTo } from 'aurelia-store';
import { State, } from '../shared/state/state';
import { pluck } from 'rxjs/operators';
import { IWaterLevelLocation } from '../shared/models/water-level-location';

@connectTo<State>({
  target: 'waterLevelLocations',
  selector: store => store.state.pipe(pluck('waterLevelLocations'))
})
export class WaterLocationSelect {
  public waterLevelLocations: IWaterLevelLocation[];
  
  @bindable
  public selectedLocationId: number|undefined
}
