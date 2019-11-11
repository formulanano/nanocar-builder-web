import { saveState, loadState } from "./localStorage";

const state = {
  test: "jest",
};

// Tests saveState
it("saves state to localStorage", () => {
  saveState(state);
  expect(localStorage.state).toEqual(JSON.stringify(state));
});

// Tests loadState()
it("loads state from localStorage", () => {
  const loadedState = loadState();
  expect(loadedState.test).toEqual("jest");
});
