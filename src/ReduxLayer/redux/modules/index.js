import { combineReducers } from "redux";

// Import reducers
import appSettings from "./appSettings";

/**
 * combineReducers
 *
 * @type {Function} combines reducers to create a root reducer
 */
export default combineReducers({
  appSettings,
});
