import "../../assets/betBtns.css";
import React from "react";
import { betBtnText, elipseBetBtn, betBtnValue } from "./specs";

export default function BetBtns({ updateBet, bet }) {

  const low = '0', hi = '1';

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
              className={'svgBetBtnOutline' + (bet.bonus5.m > 0 ? '' : ' betBtnFlash')}
            />
            <text {...betBtnText} opacity={bet.bonus5.m > 0 ? low : hi} y="12">
              5 EXTRA
            </text>
            <text {...betBtnText} opacity={bet.bonus5.m > 0 ? low : hi} y="20">
              BONUS
            </text>
            <text {...betBtnValue} opacity={bet.bonus5.m > 0 ? hi : low} y="19">
              ${bet.bonus5.m}
            </text>
          </g>

          <g
            className="pointer"
            transform="translate(200,60) scale(2)"
            onClick={() => updateBet("bonus3", "m")}
          >
            <ellipse
              {...elipseBetBtn}
              className={'svgBetBtnOutline' + (bet.bonus3.m > 0 ? '' : ' betBtnFlash')}
            />
            <text {...betBtnText} opacity={bet.bonus3.m > 0 ? low : hi} y="12">
              3 EXTRA
            </text>
            <text {...betBtnText} opacity={bet.bonus3.m > 0 ? low : hi} y="20">
              BONUS
            </text>
            <text {...betBtnValue} opacity={bet.bonus3.m > 0 ? hi : low} y="19">
              ${bet.bonus3.m}
            </text>
          </g>

          <g
            className="pointer"
            transform="translate(90,60) scale(2)"
            onClick={() => updateBet("bonus3", "l")}
          >
            <ellipse
              {...elipseBetBtn}
              className={'svgBetBtnOutline' + (bet.bonus3.l > 0 ? '' : ' betBtnFlash')}
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
              className={'svgBetBtnOutline' + (bet.bonus3.r > 0 ? '' : ' betBtnFlash')}

            />
            <text {...betBtnText} x="25" y="12">
              3 EXTRA
            </text>
            <text {...betBtnText} x="25" y="20">
              BONUS
            </text>
          </g>

          <g className="pointer" transform="translate(10,120) scale(3)" onClick={() => updateBet("ante", "l")}>
            <polygon
              points="25,0 0,10 25,20, 50,10"
              className={'svgBetBtnOutline' + (bet.ante.l > 0 ? '' : ' betBtnFlash')}

              style={{ fill: "#af2121" }}
            />
            <text {...betBtnText} x="25" y="12.5" >ANTE</text>
          </g>
          <g className="pointer" transform="translate(175,120) scale(3)" onClick={() => updateBet("ante", "m")}>
            <polygon
              points="25,0 0,10 25,20, 50,10"
              className={'svgBetBtnOutline' + (bet.ante.m > 0 ? '' : ' betBtnFlash')}
              style={{ fill: "#af2121" }}
            />
            <text {...betBtnText} x="25" y="12.5" >ANTE</text>
          </g>
          <g className="pointer" transform="translate(340,120) scale(3)" onClick={() => updateBet("ante", "r")}>
            <polygon
              points="25,0 0,10 25,20, 50,10"
              className={'svgBetBtnOutline' + (bet.ante.r > 0 ? '' : ' betBtnFlash')}
              style={{ fill: "#af2121" }}
            />
            <text {...betBtnText} x="25" y="12.5" >ANTE</text>
          </g>
        </svg>
      </div>
    </div>
  );
}
