import React from "react";

const CoinIcon = ({ color = "currentColor", size = 40 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 14 14"
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0M7.75 3.25a.75.75 0 0 0-1.5 0v.51a1.866 1.866 0 0 0-.2 3.678l1.474.323a.5.5 0 0 1-.107.989h-.834a.5.5 0 0 1-.471-.333a.75.75 0 0 0-1.415.5c.239.674.83 1.184 1.553 1.305v.528a.75.75 0 0 0 1.5 0v-.528a2.001 2.001 0 0 0 .094-3.927l-1.473-.322a.366.366 0 0 1 .078-.723h.968a.497.497 0 0 1 .471.333a.75.75 0 1 0 1.415-.5A2 2 0 0 0 7.75 3.778z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default CoinIcon;
