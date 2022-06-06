import React from "react";

export default function CashLabels() {
  const xMargin = "63";
  return (
    <g>
      <text
        textAnchor="end"
        fontWeight="bold"
        fontSize="9"
        x={xMargin}
        y="8.5"
        fill="#FFFFFF"
        opacity="0.8"
      >
        BALANCE
      </text>
      <text
        textAnchor="end"
        fontWeight="bold"
        fontSize="9"
        x={xMargin}
        y="20.5"
        fill="#FFFFFF"
        opacity="0.8"
      >
        BET: L-M-R-5C
      </text>
      <text
        textAnchor="end"
        fontWeight="bold"
        fontSize="9"
        x={xMargin}
        y="32.5"
        fill="#FFFFFF"
        opacity="0.8"
      >
        WIN: L-M-R-5C
      </text>
      <text
        textAnchor="end"
        fontWeight="bold"
        fontSize="9"
        x={xMargin}
        y="44.5"
        fill="#FFFFFF"
        opacity="0.8"
      >
        TOTAL WIN
      </text>
    </g>
  );
}
