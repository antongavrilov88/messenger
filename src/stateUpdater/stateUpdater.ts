import { userStateUpdater } from './userStateUpdater.js'

export const stateUpdater = (actionType: any, payload: any = null) => {
    userStateUpdater(actionType)
}