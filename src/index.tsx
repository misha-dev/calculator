import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import './index.scss';
import { CalcContextProvider } from './data';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <CalcContextProvider>
      <App />
    </CalcContextProvider>
  </BrowserRouter>,
  // </React.StrictMode>
);
