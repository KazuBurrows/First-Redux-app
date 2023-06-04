import { configureStore } from '@reduxjs/toolkit';
import reducer from './Reducers';
import { currencyChangeMiddleware } from './middleware'


export const store = configureStore({
  reducer: {
    store: reducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware()
  //     .concat(currencyChangeMiddleware),    // This line adds developers custom middleware.
});
