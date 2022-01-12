import { createStore } from 'redux';
import { loadState, saveState } from './localStorage';
import reducer from '../Reducer';

const persistedState = loadState();
const store = createStore(reducer, persistedState);
store.subscribe(() => {
    saveState({state: store.getState()})
})

export default store;