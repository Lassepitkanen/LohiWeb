import gql from 'graphql-tag';
import { DocumentNode } from 'graphql';

export const waterLevelLocationsQuery: DocumentNode = gql`
  query {
    waterLevelLocations {
      id
      name
    }
  }
`;

export const createWaterLevelLocationMutation: DocumentNode = gql`
  mutation($name: String!) {
    waterLevelLocation: createWaterLevelLocation(waterLevelLocation: {name: $name}) {
      id
      name
    }
  }
`;

export const deleteWaterLevelLocation: DocumentNode = gql`
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
