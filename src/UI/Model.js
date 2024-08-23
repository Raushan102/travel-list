import { useImperativeHandle, forwardRef, useRef } from "react";
import Exclamation from "../assets/3588294.png";
import { createPortal } from "react-dom";
function Model({ children }, ref) {
  const model = useRef();

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        console.log("this function mdoel called");
       model.current.showModal()
      },
    };
  });

  return createPortal(
    <dialog  ref={model} className="m-auto backdrop:bg-neutral-700/95 p-10 rounded-md text-center gap-3 bg-yellow-200">
      <img src={Exclamation} alt="exclamation"   className="h-16 w-16 m-auto " />
      {children}

      <form method="dialog">
        <button className="px-10 py-2 border-2 border-black rounded-sm bg-pink-600 text-extrabold m-6">close</button>
      </form>
    </dialog>,
    document.getElementById("model")
  );
}

export default forwardRef(Model);
