import React from "react";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import SubBar from "../SubBar/SubBar";
import './TourMatches.css';

function TourMatches() {

    const products = [
      { Round:'2', Flag1: <img alt="" src="Assets/flags/ru.png" className="flags"/>, Player1: 'John', Score: <div className="form-inline justify-content-center"><div className="tour_score mr-2">0 </div> - <div className="tour_score ml-2"> 0</div></div>, Player2: 'John', Flag2: <img alt="" src="Assets/flags/ru.png" className="flags"/>,},
      { Round:'2', Flag1: <img alt="" src="Assets/flags/ru.png" className="flags"/>, Player1: 'John', Score: <div className="form-inline justify-content-center"><div className="tour_score mr-2">0 </div> - <div className="tour_score ml-2"> 0</div></div>, Player2: 'John', Flag2: <img alt="" src="Assets/flags/ru.png" className="flags"/>,},
      { Round:'2', Flag1: <img alt="" src="Assets/flags/ru.png" className="flags"/>, Player1: 'John', Score: <div className="form-inline justify-content-center"><div className="tour_score mr-2">0 </div> - <div className="tour_score ml-2"> 0</div></div>, Player2: 'John', Flag2: <img alt="" src="Assets/flags/ru.png" className="flags"/>,},
      { Round:'2', Flag1: <img alt="" src="Assets/flags/ru.png" className="flags"/>, Player1: 'John', Score: <div className="form-inline justify-content-center"><div className="tour_score mr-2">0 </div> - <div className="tour_score ml-2"> 0</div></div>, Player2: 'John', Flag2: <img alt="" src="Assets/flags/ru.png" className="flags"/>,},
      { Round:'2', Flag1: <img alt="" src="Assets/flags/ru.png" className="flags"/>, Player1: 'John', Score: <div className="form-inline justify-content-center"><div className="tour_score mr-2">0 </div> - <div className="tour_score ml-2"> 0</div></div>, Player2: 'John', Flag2: <img alt="" src="Assets/flags/ru.png" className="flags"/>,},
      { Round:'2', Flag1: <img alt="" src="Assets/flags/ru.png" className="flags"/>, Player1: 'John', Score: <div className="form-inline justify-content-center"><div className="tour_score mr-2">0 </div> - <div className="tour_score ml-2"> 0</div></div>, Player2: 'John', Flag2: <img alt="" src="Assets/flags/ru.png" className="flags"/>,},
      { Round:'2', Flag1: <img alt="" src="Assets/flags/ru.png" className="flags"/>, Player1: 'John', Score: <div className="form-inline justify-content-center"><div className="tour_score mr-2">0 </div> - <div className="tour_score ml-2"> 0</div></div>, Player2: 'John', Flag2: <img alt="" src="Assets/flags/ru.png" className="flags"/>,},
      { Round:'2', Flag1: <img alt="" src="Assets/flags/ru.png" className="flags"/>, Player1: 'John', Score: <div className="form-inline justify-content-center"><div className="tour_score mr-2">0 </div> - <div className="tour_score ml-2"> 0</div></div>, Player2: 'John', Flag2: <img alt="" src="Assets/flags/ru.png" className="flags"/>,},
      { Round:'2', Flag1: <img alt="" src="Assets/flags/ru.png" className="flags"/>, Player1: 'John', Score: <div className="form-inline justify-content-center"><div className="tour_score mr-2">0 </div> - <div className="tour_score ml-2"> 0</div></div>, Player2: 'John', Flag2: <img alt="" src="Assets/flags/ru.png" className="flags"/>,},
      { Round:'2', Flag1: <img alt="" src="Assets/flags/ru.png" className="flags"/>, Player1: 'John', Score: <div className="form-inline justify-content-center"><div className="tour_score mr-2">0 </div> - <div className="tour_score ml-2"> 0</div></div>, Player2: 'John', Flag2: <img alt="" src="Assets/flags/ru.png" className="flags"/>,},
    ]

    const columns = [
      { dataField: 'Round', text: 'Round', sort: true},
      { dataField: 'Flag1', text: 'Flag', sort: true },
      { dataField: 'Player1', text: 'Player1', sort: true },
      { dataField: 'Score', text: 'Score', sort: true },
      { dataField: 'Player2', text: 'Player2', sort: true },
      { dataField: 'Flag2', text: 'Flag', sort: true },
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
                  className="tour_matches"
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
  
  export default TourMatches;