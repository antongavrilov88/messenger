import { ON_LOGIN, ON_LOGOUT } from '../actions.js'
import Store from '../utils/Store.js'

export const authStateUpdater = async (action: any) => {
    switch (action.type) {
        case ON_LOGIN:
            Store.setState({
                auth: {
                    status: action.payload.reason ? action.payload.reason : true
                }
            })
            break
        case ON_LOGOUT:
            Store.setState({
                auth:{
                    status: false
                }
            })
        default:
            break;
    }
}