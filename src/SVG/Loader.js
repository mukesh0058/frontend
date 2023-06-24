import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Loader = () => {
  return (
    <div className="main">
      <FontAwesomeIcon icon={faSpinner} spin color={`#fff`} size="2x" />
    </div>
  );
};

export default Loader;
