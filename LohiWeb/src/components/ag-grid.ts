import { ApiService } from './../shared/services/api-service';
import {Grid, GridOptions} from 'ag-grid-community';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { inject } from 'aurelia-framework';

@inject(ApiService)
export class AgGrid {
  private gridOptions: GridOptions = <GridOptions>{};
  private api: ApiService;

  constructor(ApiService: ApiService) {
    this.api = ApiService;
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
  private getRowData() {
    this.api.queryData('{waterLevels {id, unixTime, value}}').then(data => {
      if (this.gridOptions.api && data) {
        this.gridOptions.api.updateRowData({add: data.waterLevels});
      }
    });
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