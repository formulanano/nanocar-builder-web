import React from "react";
import FPSStats from "react-fps-stats";

/**
 * FPSMonitor
 *
 * @type {Function} renders FPS stats on the screen
 */
const FPSMonitor = () => {
  return <FPSStats top="auto" left="auto" bottom={20} right={20} />;
};

export default FPSMonitor;
