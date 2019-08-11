import gql from 'graphql-tag';

export const waterLevelLocationsQuery: Function = gql`
  query {
    waterLevelLocations {
      id
      name
    }
  }
`;

export const createWaterLevelLocationMutation: Function = gql`
  mutation($name: String!) {
    createWaterLevelLocation(waterLevelLocation: {name: $name}) {
      name
    }
  }
`;

export interface IWaterLevelLocationData {
  waterLevelLocations: Array<IWaterLevelLocation>
}

export interface IWaterLevelLocation {
  id: number,
  name: string
}