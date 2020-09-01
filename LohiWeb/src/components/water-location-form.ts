import { mutate } from './../shared/services/api-service';
import { ApolloQueryResult } from 'apollo-boost';
import { createWaterLevelLocationMutation, INewWaterLevelLocation } from '../shared/models/water-level-location';
import { Store, connectTo } from 'aurelia-store';
import { State, addWaterLevelLocationAction } from '../shared/state/state';

@connectTo()
export class WaterLocationForm {
  name: string = '';

  constructor(private store: Store<State>) {
    this.store.registerAction('addWaterLevelLocationAction', addWaterLevelLocationAction);
  }

  public async submit() {
    try {
      const { data: { waterLevelLocation }} = await mutate({ name: this.name }, createWaterLevelLocationMutation) as ApolloQueryResult<INewWaterLevelLocation>;
      this.store.dispatch('addWaterLevelLocationAction', waterLevelLocation);
    } catch (e) {
      throw new Error('error');
    }
  };
}