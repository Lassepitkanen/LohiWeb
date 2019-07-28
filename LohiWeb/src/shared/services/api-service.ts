import axios  from 'axios';
import IWaterLevelData from '../models/water-level';
axios.defaults.baseURL = 'http://localhost:6556/graphql/';

export class ApiService {
  queryData(query: string): Promise<IWaterLevelData>  {
    return axios.post('',  {query}).then(response => {
      return response.data.data;
    }).catch(error => {
      console.log(error);
    });
  }
}