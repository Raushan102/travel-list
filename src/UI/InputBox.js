import React from "react";

function InputBox({interItems,onItemChange}) {
  return <input type="text" id="inputBox" name="inputBox" className="border-slate-900 border-none  rounded-2xl bg-yellow-200 p-1 text-center" placeholder="items..." onChange={onItemChange} value={interItems}/>;
}

export default InputBox;
