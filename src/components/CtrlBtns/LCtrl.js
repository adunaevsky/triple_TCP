import React from "react";
import "../../assets/CtrlBtns.css";
import { midText, upperText, lowerText, ctrlRect } from "./specs";


export default function LCtrl({ topLbl, btmLbl, opacity, action, actionSpec }) {
  return (
    <div className="ctrlHeight">
      <div className="btnBase lBtnCtrl">
        <svg
          className="lblBase lblSizeSmall lFillEffect"
          viewBox="0 0 175.4 190"
        >
          <rect
            opacity={opacity}
            {...ctrlRect}
            x="-640"
            className="ctrlBtnRect"
            onClick={() => action(actionSpec)}
          />
          {btmLbl === "" && (
            <text opacity={opacity} x="75" {...midText} onClick={() => action(actionSpec)}>
              {topLbl}
            </text>
          )}
          {btmLbl !== "" && (
            <text opacity={opacity} x="75" {...upperText} onClick={() => action(actionSpec)}>
              {topLbl}
            </text>
          )}
          {btmLbl !== "" && (
            <text opacity={opacity} x="75" {...lowerText} onClick={() => action(actionSpec)}>
              {btmLbl}
            </text>
          )}
        </svg>
      </div>
    </div>
  );
}
