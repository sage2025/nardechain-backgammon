import React from "react";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import SearchBar from "../SearchBar/SearchBar";
import './MatchList.css';

function MatchList() {

    const products = [
      { Player1:'Jenkins', Rating1: '1', ErroeRate1:'1 points',  Player2: 'John', Rating2: '1', ErroeRate2:'1 points', Score:'normal', Review:'0', DownLoad:''},
      { Player1:'Jenkins', Rating1: '1', ErroeRate1:'1 points',  Player2: 'John', Rating2: '1', ErroeRate2:'1 points', Score:'normal', Review:'0', DownLoad:''},
      { Player1:'Jenkins', Rating1: '1', ErroeRate1:'1 points',  Player2: 'John', Rating2: '1', ErroeRate2:'1 points', Score:'normal', Review:'0', DownLoad:''},
      { Player1:'Jenkins', Rating1: '1', ErroeRate1:'1 points',  Player2: 'John', Rating2: '1', ErroeRate2:'1 points', Score:'normal', Review:'0', DownLoad:''},
      { Player1:'Jenkins', Rating1: '1', ErroeRate1:'1 points',  Player2: 'John', Rating2: '1', ErroeRate2:'1 points', Score:'normal', Review:'0', DownLoad:''},
      { Player1:'Jenkins', Rating1: '1', ErroeRate1:'1 points',  Player2: 'John', Rating2: '1', ErroeRate2:'1 points', Score:'normal', Review:'0', DownLoad:''},
      { Player1:'Jenkins', Rating1: '1', ErroeRate1:'1 points',  Player2: 'John', Rating2: '1', ErroeRate2:'1 points', Score:'normal', Review:'0', DownLoad:''},
      { Player1:'Jenkins', Rating1: '1', ErroeRate1:'1 points',  Player2: 'John', Rating2: '1', ErroeRate2:'1 points', Score:'normal', Review:'0', DownLoad:''},
      { Player1:'Jenkins', Rating1: '1', ErroeRate1:'1 points',  Player2: 'John', Rating2: '1', ErroeRate2:'1 points', Score:'normal', Review:'0', DownLoad:''},
      { Player1:'Jenkins', Rating1: '1', ErroeRate1:'1 points',  Player2: 'John', Rating2: '1', ErroeRate2:'1 points', Score:'normal', Review:'0', DownLoad:''},
      { Player1:'Jenkins', Rating1: '1', ErroeRate1:'1 points',  Player2: 'John', Rating2: '1', ErroeRate2:'1 points', Score:'normal', Review:'0', DownLoad:''},
      { Player1:'Jenkins', Rating1: '1', ErroeRate1:'1 points',  Player2: 'John', Rating2: '1', ErroeRate2:'1 points', Score:'normal', Review:'0', DownLoad:''},
      { Player1:'Jenkins', Rating1: '1', ErroeRate1:'1 points',  Player2: 'John', Rating2: '1', ErroeRate2:'1 points', Score:'normal', Review:'0', DownLoad:''},
      { Player1:'Jenkins', Rating1: '1', ErroeRate1:'1 points',  Player2: 'John', Rating2: '1', ErroeRate2:'1 points', Score:'normal', Review:'0', DownLoad:''},
      { Player1:'Jenkins', Rating1: '1', ErroeRate1:'1 points',  Player2: 'John', Rating2: '1', ErroeRate2:'1 points', Score:'normal', Review:'0', DownLoad:''}
    ]

    const columns =  [
      { dataField: 'Player1', text: 'Player1', sort: true },
      { dataField: 'Rating1', text: 'Rating', sort: true },
      { dataField: 'ErrorRate1', text: 'ErrorRate', sort: true },
      { dataField: 'Player2', text: 'Player2', sort: true },
      { dataField: 'Rating2', text: 'Rating', sort: true },
      { dataField: 'ErrorRate2', text: 'ErrorRate', sort: true },
      { dataField: 'Score', text: 'Score', sort: true },
      { dataField: 'Review', text: 'Review', sort: true },
      { dataField: 'DownLoad', text: 'DownLoad', sort: true },

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
                <SearchBar {...props.searchProps}/>
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
  
  export default MatchList;