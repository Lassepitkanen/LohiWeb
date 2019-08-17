import { IWaterLevelLocation } from './../models/water-level-location';

export interface State {
  waterLevelLocations: IWaterLevelLocation[];
}

export const initialState: State = {
  waterLevelLocations: [],
};

export const setWaterLevelLocationsAction = (state: State, waterLevelLocations: IWaterLevelLocation[]) => {
  const newState = Object.assign({}, state);
  newState.waterLevelLocations = waterLevelLocations;

  return newState;
}

export const addWaterLevelLocationAction = (state: State, waterLevelLocation: IWaterLevelLocation) => {
  const newState = Object.assign({}, state);
  newState.waterLevelLocations = [...newState.waterLevelLocations, waterLevelLocation];

  return newState;
}

export const deleteWaterLevelLocationAction = (state: State, index: number) => {
  const newState = Object.assign({}, state);
  const locations = [...newState.waterLevelLocations];
  locations.splice(index, 1);
  newState.waterLevelLocations = locations;

  return newState;
}