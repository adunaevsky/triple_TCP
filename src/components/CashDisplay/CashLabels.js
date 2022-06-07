import React from "react";
import {commonDisplayLabelsAttr} from './specs'

export default function CashLabels({ specs }) {


  return (
    <g>
      {specs.map((s) => {
        return ( s.skipLine ? '' :
          <text key={s.id + 'cdText'} y={s.yText} {...commonDisplayLabelsAttr}>
            {s.label}
          </text>
        );
      })}
    </g>
  );
}
