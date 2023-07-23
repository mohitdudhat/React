import "./App.css";
import Explore from "./Components/Explorer";
import data from "./Components/data";
import Table from "./Components/Table";
function App() {
  return (
    <>
      <Explore record={data} />
      <Table record={data} />
    </>
  );
}

export default App;
