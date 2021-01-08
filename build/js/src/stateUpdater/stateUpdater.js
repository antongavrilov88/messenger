var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { authStateUpdater } from "./authStateUpdater.js";
import { userStateUpdater } from "./userStateUpdater.js";
import { chatStateUpdater } from "./chatStateUpdater.js";
const payloadHandler = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    let result = yield payload.then((result) => result);
    try {
        return JSON.parse(result.response);
    }
    catch (error) {
        return result.response;
    }
});
export const stateUpdater = (action) => __awaiter(void 0, void 0, void 0, function* () {
    if (action.payload) {
        action = Object.assign(Object.assign({}, action), { payload: yield payloadHandler(action.payload) });
    }
    authStateUpdater(action);
    userStateUpdater(action);
    chatStateUpdater(action);
});
//# sourceMappingURL=stateUpdater.js.map