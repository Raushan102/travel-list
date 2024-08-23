import React from "react";

const numbers = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  141,
  15,
  16,
  17,
  18,
  19,
  20,
];

function Selection({ onchange, selectedValue }) {
  return (
    <select
      className="border-slate-900 border-none bg-yellow-200 rounded-2xl p-1 text-center"
      onChange={onchange}
      value={selectedValue}
    >
      {numbers.map((number) => {
        return (
          <option value={number} key={number}>
            {number}
          </option>
        );
      })}
    </select>
  );
}

export default Selection;
