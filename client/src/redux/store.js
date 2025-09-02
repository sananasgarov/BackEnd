import {combineReducers, createStore} from "redux"
import { authReducer } from "./reducers/auth.reducer"
import { loaderReducer } from "./reducers/loader.reducer"
import { postsReducer } from "./reducers/posts.reducer "
const reducers = combineReducers({
    auth: authReducer,
    loader: loaderReducer,
    posts: postsReducer
})
export const store = createStore(reducers)