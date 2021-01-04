import Store from "../utils/Store.js";
import { userStore, } from "./userState.js";
import { authStore } from "./authState.js";
import { chatStore } from "./chatState.js";
export const store = Store.getInstance();
let state = store.state;
state = userStore(state);
state = authStore(state);
state = chatStore(state);
export default state;
//# sourceMappingURL=State.js.map