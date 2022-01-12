var initialState = {};

if(initialState === null)
    initialState = {
        account: '',
        username: '',
        name:'',
        birth: '',
        email:'',
        gender: '',
        state: '',
        code: '',
        password:'',
        passwordconf: ''
        // logo:'',
        // state:'',
        // timezone:'',
        // permission:''
    }

export default function (state=initialState, action) {
    switch (action.type) {
        case 'REGISTER':
            state = action.payload;
            return state;
    
        default:
            return state;
    }
}

