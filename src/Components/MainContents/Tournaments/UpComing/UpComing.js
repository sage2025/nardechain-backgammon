import React from "react";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import SearchBar from "../SubBar/SearchBar";
import { Link } from "react-router-dom";
import './UpComing.css';



function UpComing() {

    const products = [
      { Date:'Jenkins', Time: '1', Name: 'John', Buyin: '1', Length:'1 points', Clock:'normal', Entries:'0', Open:<Link to="/pretournament" className="btn tour_table_open">Open</Link>},
      { Date:'Jenkins', Time: '1', Name: 'John', Buyin: '1', Length:'1 points', Clock:'normal', Entries:'0', Open:''},
      { Date:'Jenkins', Time: '1', Name: 'John', Buyin: '1', Length:'1 points', Clock:'normal', Entries:'0', Open:''},
      { Date:'Jenkins', Time: '1', Name: 'John', Buyin: '1', Length:'1 points', Clock:'normal', Entries:'0', Open:''},
      { Date:'Jenkins', Time: '1', Name: 'John', Buyin: '1', Length:'1 points', Clock:'normal', Entries:'0', Open:''},
      { Date:'Jenkins', Time: '1', Name: 'John', Buyin: '1', Length:'1 points', Clock:'normal', Entries:'0', Open:''},
      { Date:'Jenkins', Time: '1', Name: 'John', Buyin: '1', Length:'1 points', Clock:'normal', Entries:'0', Open:<Link to="/pretournament" className="btn tour_table_open">Open</Link>},
      { Date:'Jenkins', Time: '1', Name: 'John', Buyin: '1', Length:'1 points', Clock:'normal', Entries:'0', Open:''},
      { Date:'Jenkins', Time: '1', Name: 'John', Buyin: '1', Length:'1 points', Clock:'normal', Entries:'0', Open:''},
      { Date:'Jenkins', Time: '1', Name: 'John', Buyin: '1', Length:'1 points', Clock:'normal', Entries:'0', Open:''},
      { Date:'Jenkins', Time: '1', Name: 'John', Buyin: '1', Length:'1 points', Clock:'normal', Entries:'0', Open:''},
      { Date:'Jenkins', Time: '1', Name: 'John', Buyin: '1', Length:'1 points', Clock:'normal', Entries:'0', Open:''},
      { Date:'Jenkins', Time: '1', Name: 'John', Buyin: '1', Length:'1 points', Clock:'normal', Entries:'0', Open:''},
      { Date:'Jenkins', Time: '1', Name: 'John', Buyin: '1', Length:'1 points', Clock:'normal', Entries:'0', Open:''},
      { Date:'Jenkins', Time: '1', Name: 'John', Buyin: '1', Length:'1 points', Clock:'normal', Entries:'0', Open:''}
    ]

    const columns = [
      { dataField: 'Date', text: 'Date', sort: true },
      { dataField: 'Time', text: 'Time', sort: true },
      { dataField: 'Name', text: 'Name', sort: true },
      { dataField: 'Buyin', text: 'Buyin', sort: true },
      { dataField: 'Length', text: 'Length', sort: true },
      { dataField: 'Clock', text: 'Clock', sort: true },
      { dataField: 'Entries', text: 'Entries', sort: true },
      { dataField: 'Open', text: 'Options', sort: true },
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
                {/* <ClearSearchButton {...props.searchProps} /> */}
                <SearchBar {...props.searchProps} />
                <hr />
                <BootstrapTable
                  className="player_wait_table"
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
  
  export default UpComing;