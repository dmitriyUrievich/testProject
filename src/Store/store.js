import { configureStore } from '@reduxjs/toolkit'
import RepoReducer from "./repoSlice";

export default configureStore({

  reducer: {
    repo:RepoReducer,
  }

})
