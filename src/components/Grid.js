import React from 'react';
import {AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';


const Grid = (props) => {
 console.log(props);
    return (
        <div>
         
          <div className="ag-theme-alpine">
            <AgGridReact
              columnDefs={props.columns}
              pagination={true}
              paginationPageSize={10}
              domLayout="autoHeight"
              rowData={props.rowData}
              defaultColDef={{ filter: true, floatingFilter: true, sortable: true }}
            />
    
          </div>
        </div>
      );
};

export default Grid;