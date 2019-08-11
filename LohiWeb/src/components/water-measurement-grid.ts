import { bindable } from 'aurelia-framework';
import { Grid, GridOptions } from 'ag-grid-community';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css';

export class WaterMeasurementGrid {
  @bindable
  public measurementData: Object[] = [];

  private gridOptions: GridOptions = <GridOptions>{};
  private api: any;

  constructor() {
    this.gridOptions = {
      columnDefs: this.getColumnDefs(),
      rowData: [],
      defaultColDef: {
        filter: true,
        sortable: true,
      },
      rowSelection: 'multiple',
      onSelectionChanged: this.onSelectionChanged
    };
  }
  attached() {
    this.initGrid();
    this.api = this.gridOptions.api;
  }

  private onSelectionChanged() {
    let selectedNodes = this.api.getSelectedNodes();
  }

  private deleteSelected() {
    const selectedNodes = this.api.getSelectedNodes();
    const selectedIds = selectedNodes.map((node: any) => {
      return node.rowIndex;
    });

    this.measurementData = this.measurementData.filter((row, index) => {
      if (!selectedIds.includes(index)) {
        return row;
      }
    });
    this.api.setRowData(this.measurementData);
  }

  private measurementDataChanged() {
    if (this.gridOptions.api) {
      this.gridOptions.api.setRowData(this.measurementData);
    }
  }  
  private initGrid() {
    let gridDiv = document.querySelector('#measurement-grid') as HTMLElement;
    new Grid(gridDiv , this.gridOptions);
  }
  private getColumnDefs(): Array<Object> {
    return [
      { headerName: 'UnixTime', field: 'unixTime', valueGetter: (params: any) =>  new Date(params.data.unixTime * 1000).toLocaleDateString('en-US') },
      { headerName: 'Depth', field: 'depth' },
      { headerName: 'Lat', field: 'lat' },
      { headerName: 'Lng', field: 'lng' },
      { headerName: 'Alt', field: 'alt' },
      { headerName: 'Speed', field: 'speed' },
      { headerName: 'Heading', field: 'heading' },
      { headerName: 'LatError', field: 'latError' },
      { headerName: 'LngError', field: 'lngError' },
      { headerName: 'AltError', field: 'altError' },
      { headerName: 'AirTemp', field: 'airTemp' },
      { headerName: 'WaterTemp', field: 'waterTemp' },
    ]; 
  }
}