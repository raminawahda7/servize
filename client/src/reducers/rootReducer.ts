import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import usersReducer, {State} from './Users/usersReducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [],
    blacklist: [],
    debug: true
}

const rootReducer = combineReducers<State>({
    user: usersReducer,

});
// const rootReducer = usersReducer;

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const persistedReducer = rootReducer;

export default persistedReducer;

export type RootStore = ReturnType<typeof rootReducer>