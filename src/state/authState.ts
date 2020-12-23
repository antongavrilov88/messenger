export const authStore = (state: any) => {
    return {
        ...state,
        auth: {
            status: localStorage.getItem('token') ? true : false
        }
    }
}