import React from "react";

export default function CashBoxes({ commonBoxAttr, specs }) {

  return (
    <g id="cashBoxes">
        {specs.map((s)=>{
            return (s.skipLine ? '' : <rect key={s.id} id={s.id} y={s.yBox} {...commonBoxAttr}/>)
        })}
    </g>
  );
}
