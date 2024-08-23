import React, { useState } from "react";
import { useListStorage } from "../utility/Storage";
import NoItem from "./NoItem";
import ListItem from "./ListItem";
function Main() {
  const itemList = useListStorage();
  const [shortBy, setShortBy] = useState("input");

  let sortedItems = itemList.AllItems;

  if (shortBy === "item") {
    sortedItems = itemList.AllItems.slice().sort((a, b) =>
      a.item.localeCompare(b.item)
    );
  }

  if (shortBy === "Quantity") {
    sortedItems = itemList.AllItems.slice().sort(
      (a, b) => a.Quantity - b.Quantity
    );
  }
  function handleChecked(id) {
    itemList.CheckedHandler(id);
  }

  let content =
    itemList.AllItems.length > 0 ? (
      <ListItem
        items={sortedItems}
        onchange={handleChecked}
        onDelete={(id) => {
          itemList.deleteHandler(id);
        }}
      />
    ) : (
      <NoItem />
    );

  return (
    <main className="min-h-[64vh] md:h-[78vh] lg:h-[69.2vh] relative bg-neutral-700 flex flex-col flex-grow-1 w-full">
      {content}
      <select
        name="sortBy"
        id="shortItem"
        className="text-center absolute bottom-2 md:right-[17.5rem]  right-[6rem] lg:right-[41em] py-2 rounded-full bg-yellow-200 "
        value={shortBy}
        onChange={(e) => setShortBy(e.target.value)}
      >
        <option value="input">short by Input</option>
        <option value="item">short by the item</option>
        <option value="Quantity">short by the Quantity</option>
      </select>
    </main>
  );
}

export default Main;
