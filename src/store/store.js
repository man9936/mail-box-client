import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth";
import emailReducer from "./EmailFunction";

const store = configureStore({
  reducer: {
    auth: authReducer,
    email: emailReducer,
  },
});

export default store;
