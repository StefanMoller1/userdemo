import React from "react";
import PropTypes from "prop-types";

const Picker = ({ value, onChange, options }) => (
  <div style={{ display: "block", height: "80px" }}>
    <span
      style={{
        float: "left",
        padding: "10px",
        "font-size": "30px",
        "font-weight": "700",
      }}
    >
      USERSLIST
    </span>
    <span style={{ float: "right", padding: "20px" }}>
      <select onChange={(e) => onChange(e.target.value)} value={value}>
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </span>
  </div>
);

Picker.propTypes = {
  options: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Picker;
