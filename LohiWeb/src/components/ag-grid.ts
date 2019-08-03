import { query } from './../shared/services/api-service';
import { ApolloQueryResult } from 'apollo-boost';
import {Grid, GridOptions} from 'ag-grid-community';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { inject } from 'aurelia-framework';
import { waterLevelQuery, IWaterLevelData } from '../shared/models/water-level';

export class AgGrid {
  private gridOptions: GridOptions = <GridOptions>{};

  constructor() {
    this.getRowData();

    this.gridOptions = {
      columnDefs: this.getColumnDefs(),
      rowData: [],
      defaultColDef: {
        filter: true,
        sortable: true,
      }
    };
  }
  attached() {
    this.initGrid();
  }

  private export() {
    if (this.gridOptions.api) {
      this.gridOptions.api.exportDataAsCsv();
    }
  }
  private async getRowData() {
    try {
      const { data: { waterLevels } } = await query(waterLevelQuery) as ApolloQueryResult<IWaterLevelData>;
      if (this.gridOptions.api && waterLevels) {
        this.gridOptions.api.updateRowData({add: waterLevels});
      }
    } catch (e) {
      throw new Error('error');
    }
  }
  private initGrid() {
    let gridDiv :HTMLElement = document.querySelector('#grid') as HTMLElement;
    new Grid(gridDiv , this.gridOptions);
  }
  private getColumnDefs(): Array<Object> {
    return [
      {headerName: 'Id', field: 'id'},
      {headerName: 'UnixTime', field: 'unixTime', valueGetter: (params: any) => {
        return new Date(params.data.unixTime * 1000).toLocaleDateString('en-US');
      }},
      {headerName: 'Value', field: 'value'}
    ];
  }
}