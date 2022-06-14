import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

export default function Card({ pos, cardVal, flip, deal }) {
  const [time, setTime] = useState(500);
  return (
    <CSSTransition
      in={deal}
      timeout={time}
      classNames={{
        enterActive: "cardAnimation-enter-active",
        exitActive: "cardAnimation-leave-active",
      }}
      onEnter={() => setTime(195)}
      onExited={() => setTime(500)}
      unmountOnExit
    >
      {
        <div
          className={
            "cSize flip-container setAnimation " +
            pos +
            " " +
            (flip ? "flip" : "")
          }
        >
          <div className="flipper">
            <div className="front cBack1"></div>
            <div className={"back " + cardVal}></div>
          </div>
        </div>
      }
    </CSSTransition>
  );
}
