import React from "react";
import PropTypes from "prop-types";

import "./Layout.css";

const Layout = ({ children }) => {
  return <div className="Layout">{children}</div>;
};

Layout.propTypes = {
  children: PropTypes.array.isRequired,
};

export default Layout;
