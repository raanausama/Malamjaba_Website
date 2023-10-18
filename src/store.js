import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./components/header/HeaderSlice";

export const store = configureStore({
  reducer: { header: headerReducer },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// console.log(typeof store.getState, "TYPE");
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;
