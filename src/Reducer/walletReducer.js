var initialState = {};

if(initialState === null)
    initialState = {
        wallet:'',
        account:''
    }

export default function (state=initialState, action) {
    switch (action.type) {
        case 'WALLET':
            state = action.payload;
            return state;
    
        default:
            return state;
    }
}

