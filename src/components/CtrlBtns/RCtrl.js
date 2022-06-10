import React from 'react'
import "../../assets/CtrlBtns.css";
import { midText, upperText, lowerText, ctrlRect } from "./specs";

export default function RCtrl({ topLbl, btmLbl, opacity }) {
  return (
    <div className="ctrlHeight">
      <div className="btnBase rBtnCtrl">
        <svg className="lblBase lblSizeSmall rFillEffect" viewBox="0 0 175.4 190">
          <rect opacity={opacity} {...ctrlRect} x="10" className="ctrlBtnRect" />
          {btmLbl === "" && <text opacity={opacity} {...midText}>{topLbl}</text>}
          {btmLbl !== "" && <text opacity={opacity} {...upperText}>{topLbl}</text>}
          {btmLbl !== "" && <text opacity={opacity} {...lowerText}>{btmLbl}</text>}
        </svg>
      </div>
    </div>
  );
}
