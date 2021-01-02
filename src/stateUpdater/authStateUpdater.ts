import { ON_LOGIN, ON_LOGOUT,ON_LOAD } from '../actions'
import Store from '../utils/Store'

export const authStateUpdater = (action: any) => {
    switch (action.type) {
        case ON_LOGIN:
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
        case ON_LOAD:
            Store.setState({
                auth: {
                    status: action.payload.reason ? false : true
                }
            })
        default:
            break;
    }
}