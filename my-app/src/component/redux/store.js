import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension"; // eslint-disable-line
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import reducers from "./reducers";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["langState", "userState"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));

//save last lang
const persistor = persistStore(store);

export { store, persistor };