import { configureStore, combineReducers, Middleware } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { thunk } from 'redux-thunk'

import systemReducer from './modules/system'
import permissionReducer from './modules/permission'
import userReducer from './modules/user'

const persistConfig = {
  key: 'root-state',
  storage
}

const reducers = combineReducers({
  system: systemReducer,
  permission: permissionReducer,
  user: userReducer
})

const reducersConfig = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: reducersConfig,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }).concat([thunk]),
  devTools: true
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
