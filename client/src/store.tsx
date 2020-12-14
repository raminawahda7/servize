import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import persistedReducer from './reducers/rootReducer';

// const initialState = {};

const middleware = [thunk];

const store = createStore(
    persistedReducer
    // initialState,
    // compose(
        // applyMiddleware(...middleware),
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    // )
);

const persistor = persistStore(store);

export { store, persistor }