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
        // password:'',
        // logo:'',
        // state:'',
        // timezone:'',
        // permission:''
    }

export default function (state=initialState, action) {
    switch (action.type) {
        case 'LOGIN':
            state = action.payload;
            return state;
    
        default:
            return state;
    }
}

