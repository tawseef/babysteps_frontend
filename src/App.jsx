import "./App.css";
import Homepage from "./component/Homepage/homepage";
import { DataProvider } from "./component/Context/context";

function App() {
  return (
    <div>
      <DataProvider>
        <Homepage />
      </DataProvider>
    </div>
  );
}

export default App;
