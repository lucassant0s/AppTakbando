export const login = (token) => {
    return {
        type: 'LOGIN',
        user: {},
        token: token
    };
};

export const logout = () => {
    return {
        type: 'LOGOUT'
    };
