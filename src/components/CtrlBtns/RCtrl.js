import React from 'react'
import "../../assets/CtrlBtns.css";
import { midText, upperText, lowerText, ctrlRect } from "./specs";

export default function RCtrl({ topLbl, btmLbl, opacity, action }) {
  return (
    <div className="ctrlHeight">
      <div className="btnBase rBtnCtrl">
        <svg className="lblBase lblSizeSmall rFillEffect" viewBox="0 0 175.4 190">
          <rect opacity={opacity} {...ctrlRect} x="10" className="ctrlBtnRect" onClick={() => action()} />
          {btmLbl === "" && <text opacity={opacity} {...midText} onClick={() => action()}>{topLbl}</text>}
          {btmLbl !== "" && <text opacity={opacity} {...upperText} onClick={() => action()}>{topLbl}</text>}
          {btmLbl !== "" && <text opacity={opacity} {...lowerText} onClick={() => action()}>{btmLbl}</text>}
        </svg>
      </div>
    </div>
  );
}
