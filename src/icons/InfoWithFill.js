import React from "react";

const InfoWithFill = (props) => (
  <svg viewBox="0 0 48 48" {...props}>
    <circle fill="#2196F3" cx={24} cy={24} r={21} />
    <path fill="#fff" d="M22 22h4v11h-4z" />
    <circle fill="#fff" cx={24} cy={16.5} r={2.5} />
  </svg>
);

export default InfoWithFill;
