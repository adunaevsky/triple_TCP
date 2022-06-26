import React from "react";
import "../../assets/handLabels.css";

export default function PlayerHands({ results, show, fade, outcome, end }) {
  const rectOpacity = (num) => {
    return fade[num] ? "0.2" : "1";
  };
  const textOpacity = (num) => {
    return fade[num] ? "0.2" : "0.8";
  };
  return (
    <div className="playerCardLbls">
      <svg viewBox="0 -1 348.8 90" className="lblBase lblSizeBig">
        {show[0] && (
          <g>
            <rect
              fill={results.m.fill}
              x="86.55"
              y="37.4"
              width="173.4"
              height="18.4"
              rx="8.37"
              ry="8.37"
              className="svgLblBase"
              opacity={rectOpacity(0)}
            ></rect>
            <text
              textAnchor="middle"
              fontWeight="bold"
              fontSize="14"
              x="174"
              y="51.5"
              fill="#ffffff"
              opacity={textOpacity(0)}
            >
              {results.m.label}
            </text>
            {end && outcome.m === "WIN" && (
              <g>
                <rect
                  fill="red"
                  x="150"
                  y="56"
                  width="43"
                  height="18.4"
                  rx="0"
                  ry="0"
                  className="svgLblBase"
                ></rect>
                <text
                  x="172"
                  y="71"
                  textAnchor="middle"
                  fontWeight="bold"
                  fill="#fff268"
                  className="winLooper"
                >
                  {outcome.m}
                </text>
              </g>
            )}
          </g>
        )}

        {show[1] && (
          <g>
            <rect
              fill={results.l.fill}
              x="0.5"
              y="18.5"
              width="173.4"
              height="18.4"
              rx="8.37"
              ry="8.37"
              className="svgLblBase"
              opacity={rectOpacity(1)}
            ></rect>
            <text
              textAnchor="middle"
              fontWeight="bold"
              fontSize="14"
              x="87.45"
              y="33"
              fill="#ffffff"
              opacity={textOpacity(1)}
            >
              {results.l.label}
            </text>

            {end && outcome.l === "WIN" && (
              <g>
                <rect
                  fill="red"
                  x="40"
                  y="37.5"
                  width="43"
                  height="18.4"
                  rx="0"
                  ry="0"
                  className="svgResultBase"
                ></rect>
                <text
                  x="62"
                  y="53"
                  textAnchor="middle"
                  fontWeight="bold"
                  fill="#fff268"
                  className="winLooper"
                >
                  {outcome.l}
                </text>
              </g>
            )}
          </g>
        )}
        {show[2] && (
          <g>
            <rect
              fill={results.r.fill}
              x="173.9"
              y="18.5"
              width="173.9"
              height="18.4"
              rx="8.37"
              ry="8.37"
              className="svgLblBase"
              opacity={rectOpacity(2)}
            ></rect>
            <text
              textAnchor="middle"
              fontWeight="bold"
              fontSize="14"
              x="261.35"
              y="33"
              fill="#ffffff"
              opacity={textOpacity(2)}
            >
              {results.r.label}
            </text>

            {end && outcome.r === "WIN" && (
              <g>
                <rect
                  fill="red"
                  x="265"
                  y="37.5"
                  width="43"
                  height="18.4"
                  rx="0"
                  ry="0"
                  className="svgResultBase"
                ></rect>
                <text
                  x="286"
                  y="53"
                  textAnchor="middle"
                  fontWeight="bold"
                  fill="#fff268"
                  className="winLooper"
                >
                  {outcome.r}
                </text>
              </g>
            )}
          </g>
        )}

        {show[3] && (
          <g>
            <rect
              fill={results.main.fill}
              x="0.5"
              y="0"
              width="347.8"
              height="18.4"
              rx="8.37"
              ry="8.37"
              className="svgLblBase"
              opacity={rectOpacity(3)}
            ></rect>
            <text
              textAnchor="middle"
              fontWeight="bold"
              fontSize="14"
              x="174"
              y="14"
              fill="#ffffff"
              opacity={textOpacity(3)}
            >
              {results.main.label}
            </text>
          </g>
        )}
      </svg>
    </div>
  );
}

export function SetPHands(
  setPHandResults,
  pResult5,
  pResult3L,
  pResult3M,
  pResult3R
) {
  setPHandResults({
    main: { label: pResult5.label, fill: pResult5.fill },
    l: { label: pResult3L.label, fill: pResult3L.fill },
    m: { label: pResult3M.label, fill: pResult3M.fill },
    r: { label: pResult3R.label, fill: pResult3R.fill },
  });
}

export function RevealResults(setShowPResults, nextTask) {
  let resultNum = 0,
    totalResults = 4;
  let flipInterval = setInterval(() => {
    resultNum++;
    setShowPResults(() => {
      let result = [];
      for (let i = 0; i < totalResults; i++) {
        if (i < resultNum) {
          result.push(true);
        } else result.push(false);
      }
      //console.log(result);
      return result;
    });

    if (resultNum === totalResults) {
      clearInterval(flipInterval);
      nextTask("m");
    }
  }, 200);
}
