export const userStore = (state: any) => {
    return {
        ...state,
        user: {
            token: localStorage.getItem('token') ? localStorage.getItem('token') : null,
            userData: null,
            userID: null,
            error: null
        }
    }
}