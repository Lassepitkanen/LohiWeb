import { query } from './../shared/services/api-service';
import { ApolloQueryResult } from 'apollo-boost';
import { Grid, GridOptions, GridApi } from 'ag-grid-community';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { waterLevelQuery, IWaterLevelData } from '../shared/models/water-level';
import * as NProgress from 'nprogress';

export class AgGrid {
  private columnDefs: Object[] = [
    { headerName: 'Id', field: 'id' },
    { headerName: 'UnixTime', field: 'unixTime', valueGetter: (params: any) =>  new Date(params.data.unixTime * 1000).toLocaleDateString('en-US') },
    { headerName: 'Value', field: 'value' }
  ];
  private gridOptions: GridOptions = {
    columnDefs: this.columnDefs,
    rowData: [],
    defaultColDef: {
      filter: true,
      sortable: true,
    }
  };
  private gridApi: GridApi = <GridApi>{};

  async attached() {
    NProgress.start();
    this.initGrid();
    await this.getRowData();
    NProgress.done();
  }

  private export() {
    this.gridApi.exportDataAsCsv();
  }
  private async getRowData() {
    try {
      const { data: { waterLevels } } = await query(waterLevelQuery) as ApolloQueryResult<IWaterLevelData>;
      this.gridApi.updateRowData({add: waterLevels}); 
    } catch (e) {
      throw new Error('error');
    }
  }
  private initGrid() {
    const gridDiv = document.querySelector('#grid') as HTMLElement;
    new Grid(gridDiv , this.gridOptions);
    this.gridApi = this.gridOptions.api as GridApi;
  }
}