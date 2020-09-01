import gql from 'graphql-tag';
import { DocumentNode } from 'graphql';

export const waterLevelQuery: DocumentNode = gql`
  query {
    waterLevels {
      id
      unixTime
      value
    }
  }
`;

export interface IWaterLevelData {
  waterLevels: Array<IWaterLevel>
}

export interface IWaterLevel {
  id: number,
  unixTime: number,
  value: number
}