import { ON_CHANGE_PASSWORD, ON_LOAD, ON_AVATAR_CHANGE } from "../actions.js";
import state from "../state/State.js";
import Store from "../utils/Store.js";
export const userStateUpdater = (action) => {
    switch (action.type) {
        case ON_LOAD:
            Store.setState({
                user: action.payload,
                userProfileUpdated: false
            });
            break;
        case ON_CHANGE_PASSWORD:
            Store.setState({ user: Object.assign(Object.assign({}, state.user), { passwordChanged: action.payload.message ? false : true }) });
            break;
        case ON_AVATAR_CHANGE:
            Store.setState({
                userProfileUpdated: true
            });
            break;
        default:
            break;
    }
};
//# sourceMappingURL=userStateUpdater.js.map