import "../../assets/betBtns.css";
import React from "react";
import { betBtnText, elipseBetBtn } from "./specs";

export default function BetBtns({ updateBet }) {
  return (
    <div className="chipButtonsArea">
      <div className="chipButtonsAreaTop">
        <svg viewBox="0 0 500 500" width="100%">
          <g
            className="pointer"
            transform="translate(200,1) scale(2)"
            onClick={() => updateBet("bonus5", "m")}
          >
            <ellipse
              {...elipseBetBtn}
              className="svgBetBtnOutline betBtnFlash"
            />
            <text {...betBtnText} x="25" y="12">
              5 EXTRA
            </text>
            <text {...betBtnText} x="25" y="20">
              BONUS
            </text>
          </g>

          <g
            className="pointer"
            transform="translate(200,60) scale(2)"
            onClick={() => updateBet("bonus3", "m")}
          >
            <ellipse
              {...elipseBetBtn}
              className="svgBetBtnOutline betBtnFlash"
            />
            <text {...betBtnText} x="25" y="12">
              3 EXTRA
            </text>
            <text {...betBtnText} x="25" y="20">
              BONUS
            </text>
          </g>

          <g
            className="pointer"
            transform="translate(90,60) scale(2)"
            onClick={() => updateBet("bonus3", "l")}
          >
            <ellipse
              {...elipseBetBtn}
              className="svgBetBtnOutline betBtnFlash"
            />
            <text {...betBtnText} x="25" y="12">
              3 EXTRA
            </text>
            <text {...betBtnText} x="25" y="20">
              BONUS
            </text>
          </g>

          <g
            className="pointer"
            transform="translate(310,60) scale(2)"
            onClick={() => updateBet("bonus3", "r")}
          >
            <ellipse
              {...elipseBetBtn}
              className="svgBetBtnOutline betBtnFlash"
            />
            <text {...betBtnText} x="25" y="12">
              3 EXTRA
            </text>
            <text {...betBtnText} x="25" y="20">
              BONUS
            </text>
          </g>

          <g className="pointer" transform="translate(10,120) scale(3)"  onClick={() => updateBet("ante", "l")}>
            <polygon
              points="25,0 0,10 25,20, 50,10"
              className="svgBetBtnOutline betBtnFlash"
              style={{ fill: "#af2121" }}
            />
            <text {...betBtnText} x="25" y="12.5" >ANTE</text>
          </g>
          <g className="pointer" transform="translate(175,120) scale(3)"  onClick={() => updateBet("ante", "m")}>
            <polygon
              points="25,0 0,10 25,20, 50,10"
              className="svgBetBtnOutline betBtnFlash"
              style={{ fill: "#af2121" }}
            />
            <text {...betBtnText} x="25" y="12.5" >ANTE</text>
          </g>
          <g className="pointer" transform="translate(340,120) scale(3)"  onClick={() => updateBet("ante", "r")}>
            <polygon
              points="25,0 0,10 25,20, 50,10"
              className="svgBetBtnOutline betBtnFlash"
              style={{ fill: "#af2121" }}
            />
            <text {...betBtnText} x="25" y="12.5" >ANTE</text>
          </g>
        </svg>
      </div>
    </div>
  );
}
