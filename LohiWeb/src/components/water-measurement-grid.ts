import { bindable } from 'aurelia-framework';
import { Grid, GridOptions, GridApi } from 'ag-grid-community';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css';

export class WaterMeasurementGrid {
  @bindable
  public measurementData: Object[];

  private gridOptions: GridOptions = <GridOptions>{};
  private gridApi: GridApi = <GridApi>{};

  constructor() {
    this.gridOptions = {
      columnDefs: this.getColumnDefs(),
      rowData: [],
      defaultColDef: {
        filter: true,
        sortable: true,
      },
      rowSelection: 'multiple',
    };
    this.gridApi = this.gridOptions.api as GridApi;
  }
  attached() {
    this.initGrid();
  }

  private deleteSelected() {
    const selectedNodes = this.gridApi.getSelectedNodes();
    const selectedIds = selectedNodes.map((node: any) => {
      return node.rowIndex;
    });

    this.measurementData = this.measurementData.filter((row, index) => {
      if (!selectedIds.includes(index)) {
        return row;
      }
    });
    this.gridApi.setRowData(this.measurementData);
  }

  private measurementDataChanged() {
    if (this.gridApi) {
      this.gridApi.setRowData(this.measurementData);
    }
  }  
  private initGrid() {
    const gridDiv = document.querySelector('#measurement-grid') as HTMLElement;
    new Grid(gridDiv , this.gridOptions);
    this.gridApi = this.gridOptions.api as GridApi;
  }
  private getColumnDefs(): Array<Object> {
    return [
      { headerName: 'UnixTime', field: 'unixTime', valueGetter: (params: any) =>  new Date(params.data.unixTime * 1000).toLocaleDateString('en-US'), width: 125 },
      { headerName: 'Depth', field: 'depth', width: 125 },
      { headerName: 'Lat', field: 'lat', width: 125  },
      { headerName: 'Lng', field: 'lng', width: 125 },
      { headerName: 'Alt', field: 'alt', width: 125 },
      { headerName: 'Speed', field: 'speed', width: 125 },
      { headerName: 'Heading', field: 'heading', width: 125 },
      { headerName: 'LatError', field: 'latError', width: 125 },
      { headerName: 'LngError', field: 'lngError', width: 125 },
      { headerName: 'AltError', field: 'altError', width: 125 },
      { headerName: 'AirTemp', field: 'airTemp', width: 125 },
      { headerName: 'WaterTemp', field: 'waterTemp', width: 125 },
    ]; 
  }
}