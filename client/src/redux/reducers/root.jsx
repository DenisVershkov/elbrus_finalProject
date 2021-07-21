import { combineReducers } from "redux";
import loaderReducer from "./loaderReducer";
import userReducer from "./userReducer";
import errorReducer from "./errorReducer";
import projectsReducer from "./projectsReducer";
import projectReducer from "./projectReducer";
import commentReducer from "./commentReducer"

const rootReducer = combineReducers({
  user: userReducer,
  loader: loaderReducer,
  projects: projectsReducer,
  project: projectReducer,
  error: errorReducer,
  comment: commentReducer,
})

export default rootReducer;
