import './App.css';
import { Provider } from 'react-redux'
import MainContent from './Components/MainContent'
import store from './Store/Store';

function App() {
  return (
      <div className="App">
        <Provider store={store}>
            <MainContent/>
        </Provider>
      </div>
  );
}

export default App;
