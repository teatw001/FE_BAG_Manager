import { configureStore } from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from "@reduxjs/toolkit/query";
import productsAPI from "../service/product";
import usersAPI from "../service/login";
import categorysAPI from "../service/categories";
import LogosAPI from "../service/thuonghieu";
import colorsAPI from "../service/color";
import KThuocsAPI from "../service/kthuoc";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [productsAPI.reducerPath]: productsAPI.reducer,
    users: usersAPI.reducer,
    cates: categorysAPI.reducer,
    logos: LogosAPI.reducer,
    colors: colorsAPI.reducer,
    kthuocs: KThuocsAPI.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productsAPI.middleware,
      usersAPI.middleware,
      categorysAPI.middleware as any,
      colorsAPI.middleware as any,
      KThuocsAPI.middleware as any,
      LogosAPI.middleware as any
    ),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
// const persistor = persistStore(store);

// export {  persistor };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
