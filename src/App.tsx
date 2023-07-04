import './App.scss';
import { CustomRouter } from './features';
import { useTyping } from './hooks';



function App() {
  useTyping();
  return (
    <div className="App">
      <CustomRouter />
    </div>
  );
}

export default App;
