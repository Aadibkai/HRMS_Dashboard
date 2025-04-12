
import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./slices/userSlice";

import authReducer from "./slices/loginSlice"
import recallReducer from "./slices/recallSlice"


const store = configureStore({
    reducer: {
    
        user: userReducer,
      
        auth: authReducer,
        recall: recallReducer,
        
    },
});

export default store;
