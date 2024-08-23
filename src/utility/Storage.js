import { createContext, useContext, useState } from "react";

const listStorage = createContext([]);

export const useListStorage = () => useContext(listStorage);

function Storage({ children }) {
  const [items, setItems] = useState([]);

  function addItems(itemName, numberOfItems) {
    setItems((previousItem) => {
      return [
        ...previousItem,
        {
          id: items.length || Math.random(),
          item: itemName,
          Quantity: numberOfItems,
          isPacked: false,
        },
      ];
    });
  }

  function CheckedHandler(id) {
    console.log("function called", id);

    setItems((previousItemsList) => {
      const selectedItem = previousItemsList.filter((data) => data.id === id);
      console.log("yes item find out", selectedItem);
      const indexOFItems = previousItemsList.indexOf(selectedItem[0]);
      if (previousItemsList[indexOFItems].isPacked) {
        const lists = [...previousItemsList];
        const updatedItem = { ...lists[indexOFItems] };
        updatedItem.isPacked = false;
        lists[indexOFItems] = updatedItem;
        console.log("updated Data in if condition", lists);

        return lists;
      }

      const lists = [...previousItemsList];
      const updatedItem = { ...lists[indexOFItems] };
      updatedItem.isPacked = true;
      lists[indexOFItems] = updatedItem;
      console.log("updated Data", lists);
      return lists;
    });
  }

  function deleteItem(id) {
    setItems((previousItemsList) => {
      const selectedItem = previousItemsList.filter((data) => data.id !== id);
      console.log('deleted item ',selectedItem);
      return selectedItem;
    });
  }

  const value = {
    AllItems: items,
    addItems: addItems,
    CheckedHandler: CheckedHandler,
    deleteHandler: deleteItem,
  };

  return <listStorage.Provider value={value}>{children}</listStorage.Provider>;
}

export default Storage;
