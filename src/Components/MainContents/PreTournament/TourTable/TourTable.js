import React from "react";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import SubBar from "../SubBar/SubBar";
import './TourTable.css';

function TourTable() {

    const products = [
      { Rank:'12', Flag: <img alt="" src="Assets/flags/ru.png" className="flags"/>, Player: 'John', TP: '1', Prize:'USD 200'},
      { Rank:'12', Flag: <img alt="" src="Assets/flags/ru.png" className="flags"/>, Player: 'John', TP: '1', Prize:'USD 200'},
      { Rank:'12', Flag: <img alt="" src="Assets/flags/ru.png" className="flags"/>, Player: 'John', TP: '1', Prize:'USD 200'},
      { Rank:'12', Flag: <img alt="" src="Assets/flags/ru.png" className="flags"/>, Player: 'John', TP: '1', Prize:'USD 200'},
      { Rank:'12', Flag: <img alt="" src="Assets/flags/ru.png" className="flags"/>, Player: 'John', TP: '1', Prize:'USD 200'},
      { Rank:'12', Flag: <img alt="" src="Assets/flags/ru.png" className="flags"/>, Player: 'John', TP: '1', Prize:'USD 200'},
      { Rank:'12', Flag: <img alt="" src="Assets/flags/ru.png" className="flags"/>, Player: 'John', TP: '1', Prize:'USD 200'},
      { Rank:'12', Flag: <img alt="" src="Assets/flags/ru.png" className="flags"/>, Player: 'John', TP: '1', Prize:'USD 200'}
    ]

    const columns = [
      { dataField: 'Rank', text: 'Rank', sort: true, style : {width : '10%'} },
      { dataField: 'Flag', text: 'Flag', sort: true },
      { dataField: 'Player', text: 'Player', sort: true },
      { dataField: 'TP', text: 'TP', sort: true },
      { dataField: 'Prize', text: 'Prize', sort: true },
    ];
  
    const defaultSorted = [{
      dataField: 'name',
      order: 'asc'
    }];
  
    const pagination = paginationFactory({
      page: 2,
      sizePerPage: 5,
      lastPageText: '>|',
      firstPageText: '|<',
      nextPageText: '>',
      prePageText: '<',
      showTotal: true,
      alwaysShowAllBtns: true,
      onPageChange: function (page, sizePerPage) {
        console.log('page', page);
        console.log('sizePerPage', sizePerPage);
      },
      onSizePerPageChange: function (page, sizePerPage) {
        console.log('page', page);
        console.log('sizePerPage', sizePerPage);
      }
    });
  
    
    // const { SearchBar, ClearSearchButton } = Search;
  
    return (
      <div >
        <ToolkitProvider
          bootstrap4
          keyField='id'
          data={products}
          columns={columns}
          search
        >
          {
            props => (
              <div>
                <SubBar {...props.searchProps} />
                {/* <ClearSearchButton {...props.searchProps} /> */}
                <hr />
                <BootstrapTable
                  className="tour_table"
                  condensed
                  striped
                  rowStyle={ { fontSize:"15px", color:"#4678DD" } }
                  defaultSorted={defaultSorted}
                  pagination={pagination}                  
                  {...props.baseProps}
                />
              </div>
            )
          }
        </ToolkitProvider>
      </div>
    );
  }
  
  export default TourTable;