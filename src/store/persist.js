import RootReducer from '../core-files/reducers';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'rootState',
    storage,
    whitelist: [],
};

const persistRootReducer = persistReducer(persistConfig, RootReducer);

export default persistRootReducer;
