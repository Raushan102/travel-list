import React from "react";
import cutIcon from "../assets/6823821.png";

function ListItem({items,onchange,onDelete} ) {
  return (
    <ul className="flex p-5 flex-wrap items-center justify-normal gap-16">
      {items.map(({ id, item, Quantity, isPacked }) => {
        return (
          <li key={id} className="flex items-centre justify-center gap-2">
            <input type="checkbox" checked={isPacked}  onChange={()=>onchange(id)}/>
            <p>{Quantity}</p>
            {isPacked ? <del>{item}</del> : <p>{item}</p>}
            <img src={cutIcon} alt="cut Icon" className="w-5  h-5" onClick={()=>onDelete(id)} />
          </li>
        );
      })}
    </ul>
  );
}

export default ListItem;
