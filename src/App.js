import Mbox from "./Mbox";
import Sidebar from "./Sidebar";
import Chatacc from "./components/Chatacc";




function App() {
  return (
    <div className="App bg-red-500 place-items-center grid ">
    <div className="flex bg-white h-[90%] w-[90%] box ">
     
     <div className="flex flex-col w-35% place-items-start">
     <Sidebar/>
      <Chatacc/>
      </div>
      <Mbox/>

    </div>
    </div>
  );
}

export default App;
