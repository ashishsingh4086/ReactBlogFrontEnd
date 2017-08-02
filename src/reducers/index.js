import { combineReducers } from "redux";
import {reducer as formReducer} from 'redux-form';
import PostsReducer from "./reducers_posts";

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer

});

export default rootReducer;


// A reducer takes in current state as an argument and can only modify the state by returning new state