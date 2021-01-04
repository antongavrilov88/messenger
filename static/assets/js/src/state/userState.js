export const userStore = (state) => {
    return Object.assign(Object.assign({}, state), { user: {
            token: localStorage.getItem('token') ? localStorage.getItem('token') : null,
            userData: null,
            userID: null,
            error: null
        } });
};
//# sourceMappingURL=userState.js.map