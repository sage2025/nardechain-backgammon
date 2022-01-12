var initialState = {};

if(initialState === null)
    initialState = {
        coin_passed:''
    }

export default function (state=initialState, action) {
    switch (action.type) {
        case 'COIN':
            state = action.payload;
            return state;
    
        default:
            return state;
    }
}

