import React from 'react'

export default function RCtrl({topLbl, btmLbl}) {
    const midText = {
      textAnchor: "middle",
      fontWeight: "bold",
      fontSize: "40",
      x: "80",
      y: "105",
      fill: "#fff",
    };
  
    return (
      <div className="ctrlHeight">
        <div className="btnBase rBtnCtrl">
          <svg
            className="lblBase lblSizeSmall rFillEffect"
            viewBox="0 0 175.4 190"
          >
            <rect x="10" y="10" width="800.4" height="170" rx="85" ry="85" className="ctrlBtnRect" />
            {btmLbl === "" && <text {...midText}>{topLbl}</text>}
          </svg>
        </div>
      </div>
    );
}