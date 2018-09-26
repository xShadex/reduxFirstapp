import react from "react";
import PropTypes from "prop-types";

const Link = ({ children, active, onClick }) => (
  <button onClick={onClick} disabled={active} style={{ marginLeft: "4px" }}>
    {children}
  </button>
);

Link.PropTypes={
    onClick: PropTypes.func.isRequired,
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired
}

export default Link