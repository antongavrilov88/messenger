import { userStateUpdater } from './userStateUpdater.js'

export const stateUpdater = (action: any) => {
    userStateUpdater(action)
}