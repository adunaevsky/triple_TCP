import React, { useEffect } from "react";

import { useCountUp } from "react-countup";

export default function Counter({ start, value, y, attr, doneAction, duration }) {
  const betRef = React.useRef(null);
  const { update } = useCountUp({
    ref: betRef,
    start: start,
    end: value,
    delay: 0,
    duration: duration,
    prefix: "$",
    separator: ",",

/*     onEnd: ({}) => {
      if (doneAction) {
        doneAction();
      }
    }, */
  });

  useEffect(() => {
    update(value);
  }, [value]);

  return <text {...attr} y={y} ref={betRef}></text>;
}
