import { FaEraser, FaPencil } from "react-icons/fa6";
import { MdOutlineUndo, MdRedo } from "react-icons/md";
import styles from "./styles.module.css";

const Toolbar = () => {
   return (
      <div className={styles.iconsWrapper}>
         <div className={styles.icon}>
            <FaPencil />
         </div>
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
