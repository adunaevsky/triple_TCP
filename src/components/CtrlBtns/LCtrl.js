import React from "react";
import "../../assets/CtrlBtns.css";
import { midText, upperText, lowerText } from "./specs";

export default function LCtrl({ topLbl, btmLbl }) {
 
  return (
    <div className="ctrlHeight">
      <div className="btnBase lBtnCtrl">
        <svg
          className="lblBase lblSizeSmall lFillEffect"
          viewBox="0 0 175.4 190"
        >
          <rect
            x="-640"
            y="10"
            width="800.4"
            height="170"
            rx="85"
            ry="85"
            className="ctrlBtnRect"
          />
          {btmLbl === "" && <text {...midText}>{topLbl}</text>}
          {btmLbl !== "" && <text {...upperText}>{topLbl}</text>}
          {btmLbl !== "" && <text {...lowerText}>{btmLbl}</text>}
        </svg>
      </div>
    </div>
  );
}
