import React, { useState, useEffect } from "react";

export default function TextBox({ attr, y, value }) {
  const [num, setNum] = useState(value);
  console.log(value);
  useEffect(() => {
    setNum(value);
  }, [value]);

  const $format = function (x) {
    if (x === "") {
      return x;
    }
    return "$" + x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <text {...attr} y={y}>
      {num} ?
    </text>
  );
}
