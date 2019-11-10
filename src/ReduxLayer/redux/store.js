/**
 * store.js
 *
 * @description creates redux store with persisted state
 */
import { createStore, compose } from "redux";
import createRootReducer from "./modules";
import { loadState } from "../localStorage";

/**
 * persistedState
 *
 * @type {Function} setup persisted redux state
 */
const persistedState = loadState();

const enhancers = [];
const composedEnhancers = compose(...enhancers);

/**
 * createStore
 *
 * @type {Function} creates store with provided config
 */
export default createStore(createRootReducer, persistedState, composedEnhancers);
