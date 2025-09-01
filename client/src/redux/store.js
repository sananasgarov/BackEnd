import {combineReducers, createStore} from "redux"
import { authReducer } from "./reducers/auth.reducer"
const reducers = combineReducers({
    auth: authReducer,
    // posts: postsReducer
})
export const store = createStore(reducers)