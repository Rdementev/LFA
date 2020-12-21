import React from "react";

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
    >
      <circle cx="10" cy="10" r="10" fill="#ECECEC"></circle>
      <path
        fill="#676F83"
        stroke="#676F83"
        strokeWidth="0.3"
        d="M10 9.063l3.009-3.01.106.107-.106-.106a.668.668 0 11.945.945l-3.009 3.009 3.009 3.009s0 0 0 0a.668.668 0 11-.945.945L10 10.952l-3.009 3.01-.106-.106.106.106a.667.667 0 01-.945 0 .668.668 0 010-.945l3.009-3.01L6.046 7s0 0 0 0a.668.668 0 010-.945L10 9.063zm0 0l-3.009-3.01h0a.668.668 0 00-.945 0L10 9.064z"
      ></path>
    </svg>
  );
}

export default CloseIcon;
