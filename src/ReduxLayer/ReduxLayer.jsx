/**
 * ReduxLayer.jsx
 *
 * @description responsible for passing redux store and configurations
 */
import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { throttle } from "lodash";
import store from "./redux";
import { saveState } from "./localStorage";

/**
 * Persistent State Setting
 *
 * @type {Function} keeps selected state objects persistent
 */
store.subscribe(
  throttle(() => {
    saveState({
      settings: store.getState().settings,
    });
  }, 1000),
);

/**
 * ReduxLayer
 *
 * @type {Function} passes children with redux store and configurations
 */

const ReduxLayer = ({ children }) => <Provider store={store}>{children}</Provider>;

ReduxLayer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default ReduxLayer;
