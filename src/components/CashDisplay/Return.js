import React from "react";

export default function Return({view}) {
    const adjustView = ()=>{
        view()
    }
  return (
    <g transform="translate(5, 12) scale(0.02)">
        <rect
        width="1050"
        height="1000"
        x="0"
        y="0" opacity="0"
        style={{ cursor: "pointer" }}
        onClick={adjustView}
      ></rect>
      <path   style={{ cursor: "pointer" }}  onClick={adjustView}  fill="yellow" d="M71.3,327.7L413.8,643V452c103.7,0,367.8,2.2,367.8,262.1c0,136.1-100.9,249.6-234.9,275.9c215.4-28,382.1-202.9,382.1-416.7c0-397.3-443.5-400.7-515-400.7V10L71.3,327.7z" />
    </g>
  );
}
