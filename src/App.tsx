import "./App.scss";
import { CustomRouter } from "./Components/CustomRouter/CustomRouter";
import { useTyping } from "./hooks/useTyping";

function App() {
  useTyping();
  return (
    <div className="App">
      <CustomRouter />
    </div>
  );
}

export default App;
