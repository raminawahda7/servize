import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import persistedReducer from './reducers/rootReducer';

// const initialState = {};

const middleware = [thunk];

const store = createStore(
<<<<<<< HEAD
    persistedReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
=======
    persistedReducer
    // initialState,
    // compose(
        // applyMiddleware(...middleware),
>>>>>>> 7565a5e971b9e202e023c70e4d5a8fba73c3f534
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

const persistor = persistStore(store);

export { store, persistor }