export default interface IWaterLevelData {
  waterLevels: Array<IWaterLevel>
}

interface IWaterLevel {
  id: number,
  unixTime: number,
  value: number
}