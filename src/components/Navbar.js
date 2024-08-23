import React, { useState, useRef } from "react";
import Selection from "../UI/Selection";
import InputBox from "../UI/InputBox";
import { useListStorage } from "../utility/Storage";
import Model from "../UI/Model.js";
import model from "../UI/Model.js";

function Navbar() {
  const ref = useRef(null);
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [interItem, setItem] = useState("");

  // function of store in state enter the items
  function handleChangeItems(event) {
    setItem(event.target.value);
  }

  // function to store in state selected number of items
  function handleSelect(event) {
    setNumberOfItems(event.target.value);
  }

  const List = useListStorage();

  function handleAddItem() {
    if (interItem==='') {
      return ref.current.open()
    }
    List.addItems(interItem, numberOfItems);
    setItem("");
    setNumberOfItems(0);
  }

  return (
    <nav className="bg-orange-500  h-20  lg:h-20  md:h-20 flex flex-col md:flex-row lg:flex-row items-center justify-center gap-2">
      <Model ref={ref}>
        <p className="text-pink-700">please select or write the Quantity and item name</p>
      </Model>
      <div>
        <p className="text-sm lg:text-lg md:text-sm">
          what do you need for you 😎 trip?
        </p>
      </div>
      <div className="flex items-center justify-center gap-1">
        <Selection onchange={handleSelect} selectedValue={numberOfItems} />
        <InputBox onItemChange={handleChangeItems} interItems={interItem} />
        <button
          onClick={handleAddItem}
          className="border-slate-900 border-none bg-yellow-200 rounded-2xl p-1 px-4 text-center"
        >
          add
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
