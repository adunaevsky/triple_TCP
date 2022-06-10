import React from "react";
import "../../assets/CtrlBtns.css";
import { midText, upperText, lowerText, ctrlRect } from "./specs";

export default function LCtrl({ topLbl, btmLbl, opacity, action }) {
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
            onClick={() => action()}
          />
          {btmLbl === "" && (
            <text opacity={opacity} {...midText} onClick={() => action()}>
              {topLbl}
            </text>
          )}
          {btmLbl !== "" && (
            <text opacity={opacity} {...upperText} onClick={() => action()}>
              {topLbl}
            </text>
          )}
          {btmLbl !== "" && (
            <text opacity={opacity} {...lowerText} onClick={() => action()}>
              {btmLbl}
            </text>
          )}
        </svg>
      </div>
    </div>
  );
}
