import React from "react";

export default function CashBoxes({xMarginBoxes}) {

  return (
    <g id="cashBoxes">
      <rect
        id="balanceBox"
        className="cashBox"
        x={xMarginBoxes}
        y="0.5"
        rx="2"
        width="53.5"
        height="10"
      />
      <rect
        id="totalBetBox"
        className="cashBox"
        x={xMarginBoxes}
        y="12.5"
        rx="2"
        width="53.5"
        height="10"
      />
      <rect
        id="winBox"
        className="cashBox"
        x={xMarginBoxes}
        y="24.5"
        rx="2"
        width="53.5"
        height="10"
      />
      <rect
        id="totalWinBox"
        className="cashBox"
        x={xMarginBoxes}
        y="36.5"
        rx="2"
        width="53.5"
        height="10"
      />
    </g>
  );
}
