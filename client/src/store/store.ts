import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./auth/authslice";
import issueReducer from "./issues/issueSlice";

const persistAuthConfig = {
  key: "auth",
  storage,
  version: 1,
};

const persistIssueConfig = {
  key: "issues",
  storage,
  version: 1,
};

const persistedAuthReducer = persistReducer(persistAuthConfig, authReducer);
const persistedIssueReducer = persistReducer(persistIssueConfig, issueReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    issues: persistedIssueReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: true,
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
