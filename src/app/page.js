import Board from "./Components/Board";
import Toolbar from "./Components/Toolbar";
import styles from "./styles.module.css";

export default function Home() {
   return (
      <main className="h-screen">
         <Board />
         <div className={styles.toolbarWrapper}>
            <Toolbar />
         </div>
      </main>
   );
}
