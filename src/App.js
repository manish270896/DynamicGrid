import './App.css';
import React from 'react';
import {AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import Grid from './components/Grid';

function App() {

  const tableData = [
    {
      id: 1,
      Name: 'Sanjay',
      Age: 15,
      Location: 'Bangalore'
    },
    { id: 2, Name: 'Def', Age: 43, Location: 'Mumbai' },
    { id: 3, Name: 'Uff', Age: 30, Location: 'Chennai' },
    { id: 4, Name: 'Ammse', Age: 87, Location: 'Delhi' },
    { id: 5, Name: 'Yysse', Age: 28, Location: 'Hyderabad' }
  ];

  const columns = [
    { headerName: "Id", field: "id", filter: "hide" },
    { headerName: "Name", field: "Name", filter: "agTextColumnFilter" },
    { headerName: "Age", field: "Age", filter: "agTextColumnFilter" },
    { headerName: "Location", field: "Location", filter: "agTextColumnFilter" },
    
  ]
  
  const rowData = [
    {make: "Toyota", model: "Celica", price: 35000},
    {make: "Ford", model: "Mondeo", price: 32000},
    {make: "Porsche", model: "Boxter", price: 72000}
];

  return (
    <div className="App">
      
     <Grid rowData = {tableData}
                columns = {columns}></Grid>
      {/* <div className="ag-theme-alpine">
        <AgGridReact
          columnDefs={columns}
          pagination={true}
          paginationPageSize={2}
          domLayout="autoHeight"
          rowData={tableData}
          defaultColDef={{ filter: true, floatingFilter: true, sortable: true }}
        />

      </div> */}
      <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
        <AgGridReact
            rowData={rowData}
            pagination
            defaultColDef={{ filter: true, floatingFilter: true, sortable: true }}>
            <AgGridColumn field="make" filter="agTextColumnFilter"></AgGridColumn>
            <AgGridColumn field="model"></AgGridColumn>
            <AgGridColumn field="price"></AgGridColumn>
        </AgGridReact>
      </div>

    </div>
  );
}

export default App;
