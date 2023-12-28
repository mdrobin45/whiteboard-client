"use client";
import Sketch from "@uiw/react-color-sketch";
import { useState } from "react";
import { FaEraser, FaPencil } from "react-icons/fa6";
import { MdOutlineUndo, MdRedo } from "react-icons/md";
import styles from "./styles.module.css";

const Toolbar = () => {
   const [hex, setHex] = useState("#fff");
   const [openPalette, setOpenPalette] = useState(false);
   return (
      <div className={styles.iconsWrapper}>
         <div className={styles.icon}>
            <FaPencil />
         </div>
         {openPalette ? (
            <>
               <div className="absolute">
                  <Sketch
                     style={{ marginLeft: 20 }}
                     color={hex}
                     onChange={(color) => {
                        setHex(color.hex);
                     }}
                  />
               </div>
            </>
         ) : (
            ""
         )}

         <button
            onClick={() => {
               setOpenPalette(!openPalette);
            }}
            className="w-7 h-7 bg-red-500 rounded-full border-2 border-gray-300"></button>

         <div className={styles.icon}>
            <FaEraser className="text-3xl" />
         </div>
         <div className={styles.icon}>
            <MdRedo className="text-3xl" />
         </div>
         <div className={styles.icon}>
            <MdOutlineUndo className="text-3xl" />
         </div>
      </div>
   );
};

export default Toolbar;
