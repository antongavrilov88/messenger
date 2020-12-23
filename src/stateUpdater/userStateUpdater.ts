import { TEST_ACTION } from '../actions.js'
import state from '../state/State.js'

export const userStateUpdater = (actionType: any) => {
    switch (actionType) {
        case TEST_ACTION:
            return {
                ...state,
                user: {
                    userID: 'TEST user Id'
                }
            }    
        default:
            break;
    }
}