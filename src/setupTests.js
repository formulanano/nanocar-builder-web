import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

/**
 * localStorageMock
 *
 * @type {Object} mock to be used on testing with localStorage
 */
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};

// Sets localStorageMock as global
global.localStorage = localStorageMock;

configure({ adapter: new Adapter() });
