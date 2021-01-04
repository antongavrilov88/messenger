import { ON_LOGIN, ON_LOGOUT,ON_LOAD, ON_SIGNUP } from '../actions'
import Store from '../utils/Store'

export const authStateUpdater = (action: any) => {
    switch (action.type) {
        case ON_LOGIN:
        case ON_SIGNUP:
            Store.setState({
                auth: {
                    status: action.payload.reason ? false : true
                }
            })
            break
        case ON_LOGOUT:
            Store.setState({
                auth:{
                    status: false
                }
            })
            break
        case ON_LOAD:
            Store.setState({
                auth: {
                    status: action.payload.reason ? false : true
                }
            })
            break
        default:
            break;
    }
}