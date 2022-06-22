import React from "react";
import "../../assets/handLabels.css";

export default function PlayerHands({ results, show }) {
  return (
    <div className="playerCardLbls">
      <svg viewBox="0 -1 348.8 60" className="lblBase lblSizeBig">
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
            ></rect>
            <text
              textAnchor="middle"
              fontWeight="bold"
              fontSize="14"
              x="87.45"
              y="33"
              fill="#ffffff"
              opacity="0.8"
            >
              {results.l.label}
            </text>
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
            ></rect>
            <text
              textAnchor="middle"
              fontWeight="bold"
              fontSize="14"
              x="261.35"
              y="33"
              fill="#ffffff"
              opacity="0.8"
            >
              {results.r.label}
            </text>
          </g>
        )}

        {show[0] && (
          <g>
            <rect
              fill={results.m.fill}
              x="86.55"
              y="0"
              width="173.4"
              height="18.4"
              rx="8.37"
              ry="8.37"
              className="svgLblBase"
            ></rect>
            <text
              textAnchor="middle"
              fontWeight="bold"
              fontSize="14"
              x="174"
              y="14"
              fill="#ffffff"
              opacity="0.8"
            >
              {results.m.label}
            </text>
          </g>
        )}
        {show[3] && (
          <g>
            <rect
              fill={results.main.fill}
              x="0.5"
              y="37.4"
              width="347.8"
              height="18.4"
              rx="8.37"
              ry="8.37"
              className="svgLblBase"
            ></rect>
            <text
              textAnchor="middle"
              fontWeight="bold"
              fontSize="14"
              x="174"
              y="51.5"
              fill="#ffffff"
              opacity="0.8"
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

export function RevealResults(setShowPResults, doneTask) {
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

      return result;
    });

    if (resultNum === totalResults) {
      clearInterval(flipInterval);
      doneTask();
    }
  }, 200);
}
