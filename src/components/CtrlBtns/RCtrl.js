import React from 'react'
import "../../assets/CtrlBtns.css";
import { midText, upperText, lowerText, ctrlRect } from "./specs";

export default function RCtrl({ topLbl, btmLbl, opacity, action, actionSpec }) {
  return (
    <div className="ctrlHeight">
      <div className="btnBase rBtnCtrl">
        <svg className="lblBase lblSizeSmall rFillEffect" viewBox="0 0 175.4 190">
          <rect opacity={opacity} {...ctrlRect} x="10" className="ctrlBtnRect" onClick={() => action(actionSpec)} />
          {btmLbl === "" && <text opacity={opacity} x="100" {...midText} onClick={() => action(actionSpec)}>{topLbl}</text>}
          {btmLbl !== "" && <text opacity={opacity} x="100" {...upperText} onClick={() => action(actionSpec)}>{topLbl}</text>}
          {btmLbl !== "" && <text opacity={opacity} x="100" {...lowerText} onClick={() => action(actionSpec)}>{btmLbl}</text>}
        </svg>
      </div>
    </div>
  );
}
