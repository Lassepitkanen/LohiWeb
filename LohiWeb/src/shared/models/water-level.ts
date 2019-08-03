import gql from 'graphql-tag';

export const waterLevelQuery: Function = gql`
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

interface IWaterLevel {
  id: number,
  unixTime: number,
  value: number
}