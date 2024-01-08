import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";
import thunk from 'redux-thunk';
import { authReducer, productReducer } from "./allSlices";

const rootReducer = combineReducers({
    auth: authReducer,
    products: productReducer
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['products']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
});

const persistor = persistStore(store)

export {store, persistor}