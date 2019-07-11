import React from "react";
import FPSStats from "react-fps-stats";

const FPSMonitor = () => {
  return <FPSStats top={"auto"} left={"auto"} bottom={20} right={20} />;
};

export default FPSMonitor;
