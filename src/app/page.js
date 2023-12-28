import Board from "./Components/Board";
import Menubar from "./Components/Menubar";

export default function Home() {
   return (
      <main className="h-screen">
         <Board />
         <Menubar />
      </main>
   );
}
