import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user';
import tagReducer from './tag';
import selectedTagReducer from './selectedTag';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from "redux"; 
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk';

const reducers = combineReducers({
  user: userReducer,
  tag: tagReducer,
  selectedTag: selectedTagReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
})

export default store;

// export default configureStore({
//   reducer: {
//     user: userReducer,
//     tag: tagReducer
//   }
// });