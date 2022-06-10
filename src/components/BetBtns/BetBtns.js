import "../../assets/betBtns.css";
import React from "react";
import {
  betBtnText,
  elipseBetBtn,
  betBtnValue,
  betBtnValueAnte,
  genBetValue,
} from "./specs";

export default function BetBtns({ updateBet, bet }) {
  const anteFontSize = (v) => (v > 99 ? "12" : "14");
  const valueOpacity = (v) => (v > 0 ? 1 : 0);
  const textOpacity = (v) => (v > 0 ? 0.15 : 1);
  const setFlash = (v) =>
    v > 0 ? "svgBetBtnOutline" : "svgBetBtnOutline betBtnFlash";
  const anteFontY = (v) => (v > 99 ? 14 : 14.5);

  return (
    <div className="chipButtonsArea">
      <div className="chipButtonsAreaTop">
        <svg viewBox="0 0 500 500" width="100%">
          <g
            className="pointer"
            transform="translate(200,1) scale(2)"
            onClick={() => updateBet("bonus5", "m")}
          >
            <ellipse {...elipseBetBtn} className={setFlash(bet.bonus5.m)} />
            <text {...betBtnText} opacity={textOpacity(bet.bonus5.m)} y="12">
              5 EXTRA
            </text>
            <text {...betBtnText} opacity={textOpacity(bet.bonus5.m)} y="20">
              BONUS
            </text>
            <text {...betBtnValue} opacity={valueOpacity(bet.bonus5.m)} y="19">
              ${bet.bonus5.m}
            </text>
          </g>

          <g
            className="pointer"
            transform="translate(200,60) scale(2)"
            onClick={() => updateBet("bonus3", "m")}
          >
            <ellipse {...elipseBetBtn} className={setFlash(bet.bonus3.m)} />
            <text {...betBtnText} opacity={textOpacity(bet.bonus3.m)} y="12">
              3 EXTRA
            </text>
            <text {...betBtnText} opacity={textOpacity(bet.bonus3.m)} y="20">
              BONUS
            </text>
            <text {...betBtnValue} opacity={valueOpacity(bet.bonus3.m)} y="19">
              ${bet.bonus3.m}
            </text>
          </g>

          <g
            className="pointer"
            transform="translate(90,60) scale(2)"
            onClick={() => updateBet("bonus3", "l")}
          >
            <ellipse {...elipseBetBtn} className={setFlash(bet.bonus3.l)} />
            <text {...betBtnText} opacity={textOpacity(bet.bonus3.l)} y="12">
              3 EXTRA
            </text>
            <text {...betBtnText} opacity={textOpacity(bet.bonus3.l)} y="20">
              BONUS
            </text>
            <text {...betBtnValue} opacity={valueOpacity(bet.bonus3.l)} y="20">
              ${bet.bonus3.l}
            </text>
          </g>

          <g
            className="pointer"
            transform="translate(310,60) scale(2)"
            onClick={() => updateBet("bonus3", "r")}
          >
            <ellipse {...elipseBetBtn} className={setFlash(bet.bonus3.r)} />
            <text {...betBtnText} opacity={textOpacity(bet.bonus3.r)} y="12">
              3 EXTRA
            </text>
            <text {...betBtnText} opacity={textOpacity(bet.bonus3.r)} y="20">
              BONUS
            </text>
            <text {...betBtnValue} opacity={valueOpacity(bet.bonus3.r)} y="20">
              ${bet.bonus3.r}
            </text>
          </g>

          <g
            className="pointer"
            transform="translate(10,120) scale(3)"
            onClick={() => updateBet("ante", "l")}
          >
            <polygon
              points="25,0 0,10 25,20, 50,10"
              className={setFlash(bet.ante.l)}
              style={{ fill: "#af2121" }}
            />
            <text {...betBtnText} y="12.5" opacity={textOpacity(bet.ante.l)}>
              ANTE
            </text>
            <text
              {...genBetValue}
              fontSize={anteFontSize(bet.ante.l)}
              y={anteFontY(bet.ante.l)}
              opacity={valueOpacity(bet.ante.l)}
            >
              ${bet.ante.l}
            </text>
          </g>
          <g
            className="pointer"
            transform="translate(175,120) scale(3)"
            onClick={() => updateBet("ante", "m")}
          >
            <polygon
              points="25,0 0,10 25,20, 50,10"
              className={setFlash(bet.ante.m)}
              style={{ fill: "#af2121" }}
            />
            <text {...betBtnText} y="12.5" opacity={textOpacity(bet.ante.m)}>
              ANTE
            </text>
            <text
              {...genBetValue}
              fontSize={anteFontSize(bet.ante.m)}
              opacity={valueOpacity(bet.ante.m)}
              y={anteFontY(bet.ante.m)}
            >
              ${bet.ante.m}
            </text>
          </g>
          <g
            className="pointer"
            transform="translate(340,120) scale(3)"
            onClick={() => updateBet("ante", "r")}
          >
            <polygon
              points="25,0 0,10 25,20, 50,10"
              className={setFlash(bet.ante.r)}
              style={{ fill: "#af2121" }}
            />
            <text {...betBtnText} y="12.5" opacity={textOpacity(bet.ante.r)}>
              ANTE
            </text>
            <text
              {...genBetValue}
              fontSize={anteFontSize(bet.ante.r)}
              opacity={valueOpacity(bet.ante.r)}
              y={anteFontY(bet.ante.r)}
            >
              ${bet.ante.r}
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
}
