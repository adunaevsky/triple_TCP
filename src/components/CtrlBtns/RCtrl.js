import React from 'react'

import { midText, upperText, lowerText } from "./specs";

export default function RCtrl({topLbl, btmLbl}) {
  
    return (
      <div className="ctrlHeight">
        <div className="btnBase rBtnCtrl">
          <svg
            className="lblBase lblSizeSmall rFillEffect"
            viewBox="0 0 175.4 190"
          >
            <rect x="10" y="10" width="800.4" height="170" rx="85" ry="85" className="ctrlBtnRect" />
            {btmLbl === "" && <text {...midText}>{topLbl}</text>}
            {btmLbl !== "" && <text {...upperText}>{topLbl}</text>}
            {btmLbl !== "" && <text {...lowerText}>{btmLbl}</text>}
          </svg>
        </div>
      </div>
    );
}
