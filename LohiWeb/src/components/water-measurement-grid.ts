import { bindable } from 'aurelia-framework';
import { Grid, GridOptions, GridApi } from 'ag-grid-community';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css';

export class WaterMeasurementGrid {
  @bindable
  public measurementData: Object[];

  private gridApi: GridApi = <GridApi>{};
  private columnDefs: Object[] = [
    { headerName: 'UnixTime', field: 'unixTime',  width: 125 }, // valueGetter: (params: any) => new Date(params.data.unixTime * 1000).toLocaleDateString('en-US')
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
    { headerName: 'WaterTemp', field: 'waterTemp', width: 125 }
  ]; 
  private gridOptions: GridOptions = {
    columnDefs: this.columnDefs,
    rowData: [],
    defaultColDef: {
      filter: true,
      sortable: true
    },
    rowSelection: 'multiple',
    suppressScrollOnNewData: true 
  };

  constructor() {
    this.gridApi = this.gridOptions.api as GridApi;
  }
  attached() {
    this.initGrid();
  }

  private deleteSelected() {
    const selectedNodes = this.gridApi.getSelectedNodes();
    const selectedData = selectedNodes.map((node: any) => {
      return node.data;
    });

    this.measurementData = this.measurementData.filter(el => {
      if (selectedData.includes(el) === false) {
        return el;
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
}