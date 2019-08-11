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
    waterLevelLocation: createWaterLevelLocation(waterLevelLocation: {name: $name}) {
      id
      name
    }
  }
`;

export const deleteWaterLevelLocation: Function = gql`
  mutation($id: ID!) {
    id: deleteWaterLevelLocation(id: $id)
  }
`;

export interface IWaterLevelLocationData {
  waterLevelLocations: Array<IWaterLevelLocation>
}

export interface IWaterLevelLocation {
  id: number,
  name: string
}

export interface INewWaterLevelLocation {
  waterLevelLocation: IWaterLevelLocation
}
