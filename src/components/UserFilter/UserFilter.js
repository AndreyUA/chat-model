import React from "react";
import PropTypes from "prop-types";

import "./UserFilter.css";

const UserFilter = ({ filterName, setFilterName }) => {
  return (
    <div className="UserFilter">
      <input
        className="UserFilter_input"
        onChange={(e) => setFilterName(e.target.value)}
        value={filterName}
        type="text"
        placeholder="Search user by name..."
      />
    </div>
  );
};

UserFilter.propTypes = {
  filterName: PropTypes.string.isRequired,
  setFilterName: PropTypes.func.isRequired,
};

export default UserFilter;
