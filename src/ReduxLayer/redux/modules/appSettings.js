/**
 * appSettings.js
 *
 * @description responsible for keeping application's setting and configurations
 */

// Redux action constants
const SET_THEME = "appSettings/SET_THEME";

/**
 * initialState
 *
 * @type {Object} initial state for settings
 */
const initialState = {
  theme: {
    list: ["DARK", "LIGHT"],
    selected: "DARK",
  },
};

/**
 * initialState
 *
 * @type {Object} initial state for settings
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        theme: action.payload,
      };

    default:
      return state;
  }
};
