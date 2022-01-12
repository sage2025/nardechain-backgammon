import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import coinReducer from './coinReducer';
import registerReducer from './registerReducer';
import walletReducer from './walletReducer';

const reducer = combineReducers({
    credential: loginReducer,
    cred_register: registerReducer,
    coin: coinReducer,
    wallet: walletReducer
});

export default reducer;