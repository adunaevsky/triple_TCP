import React from 'react'

import "../../assets/handLabels.css";

export default function DealerHand({ result }) {

    return (
        <div className="dealerCardLbls">
            <svg viewBox="0 -1 348.8 60" className="lblBase lblSizeBig">

                <g>
                    <rect
                        fill={result.fill}
                        x="86.55"
                        y="0"
                        width="173.4"
                        height="18.4"
                        rx="8.37"
                        ry="8.37"
                        className="svgLblBase"
                        opacity="1"
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
                        {result.label}
                    </text>
                </g>
            </svg>
        </div>
    );
}