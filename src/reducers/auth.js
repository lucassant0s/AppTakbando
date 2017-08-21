const defaultState = {
    isLoggedIn: false,
    user: {},
    token: ''
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'LOGIN': 
            return Object.assign({}, state, { 
                isLoggedIn: true,
                user: action.user,
                token: action.token
            });
        case 'LOGOUT':
            return Object.assign({}, state, { 
                isLoggedIn: false,
                token: ''
            });
        default:
            return state;
    }
}
