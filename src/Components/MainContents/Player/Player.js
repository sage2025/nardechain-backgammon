import { useState, useEffect } from "react";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import SearchBar from './SearchBar/SearchBar';
import './Player.css';

function Player() {
    const [products_state, setProducts] = useState([]);

    const products = [
      // { Player1:'', Rating1: '', Player2: "", Rating2: '', Length:'', Clock:'', Stake:'', View:'', roomID: ''},
      // { Player1:'Alexey', Rating1: '2148762', Player2: 'John', Rating2: '1978987', Length:'1 points', Clock:'normal', Stake:'0', View:''},
      // { Player1:'Jenkins', Rating1: '1878987', Player2: 'Haland', Rating2: '1978987', Length:'1 points', Clock:'speed', Stake:'1', View:''},
      // { Player1:'Marcelo', Rating1: '2450948', Player2: 'Jim', Rating2: '1523432', Length:'1 points', Clock:'normal', Stake:'0', View:''},
      // { Player1:'Kain', Rating1: '1723872', Player2: 'tourney', Rating2: '2124322', Length:'1 points', Clock:'normal', Stake:'0', View:''},
      // { Player1:'Jora', Rating1: '1232124', Player2: 'William', Rating2: '1412323', Length:'1 points', Clock:'normal', Stake:'0', View:''},
      // { Player1:'Yegor', Rating1: '1354321', Player2: 'Basha', Rating2: '1812908', Length:'1 points', Clock:'normal', Stake:'0', View:''},
      // { Player1:'Sharlin', Rating1: '1932327', Player2: 'Maoriz', Rating2: '1623422', Length:'1 points', Clock:'normal', Stake:'0', View:''},
      // { Player1:'sage', Rating1: '2112322', Player2: 'drcyber1', Rating2: '4000000', Length: "5", Clock: "normal (10s + 1m)", Stake: "3", View:''}
    ]

    useEffect(() => {
      setProducts(products);
    }, [])

    const columns = [
      { dataField: 'playerA', text: 'PlayerA', sort: true },
      { dataField: 'ratingA', text: 'RatingA', sort: true },
      { dataField: 'playerB', text: 'PlayerB', sort: true },
      { dataField: 'ratingB', text: 'RatingB', sort: true },
      { dataField: 'length', text: 'Length', sort: true },
      { dataField: 'clock', text: 'Clock', sort: true },
      { dataField: 'stake', text: 'Stake', sort: true },
      { dataField: 'view', text: '', sort: true },

    ];
  
    const defaultSorted = [{
      dataField: 'name',
      order: 'asc'
    }];
  
    const pagination = paginationFactory({
      page: 1,
      sizePerPage: 10,
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
          data={products_state}
          columns={columns}
          search
        >
          {
            props => (
              <div>
                <SearchBar {...props.searchProps} setProducts={setProducts} products_state={products_state} products={products} />
                {/* <ClearSearchButton {...props.searchProps} /> */}
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
  
  export default Player;