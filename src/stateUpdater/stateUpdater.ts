import { userStateUpdater } from './userStateUpdater.js'

const payloadHandler = async (payload:any) => {
    let result = await payload.then( (result: any) => result )
    // switch (result.code) {
    //     case 200:
    //     case 201:
    //     case 204:
    //         return JSON.parse(result.response)
    //     default:
    //         return {error: `Something went wrong`}
    // }
    return JSON.parse(result.response)
}

export const stateUpdater = async (action: any) => {
    if ( action.payload ) {
        action = {...action, payload: await payloadHandler(action.payload)}
    }
    userStateUpdater(action)
}