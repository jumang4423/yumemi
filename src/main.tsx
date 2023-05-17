import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import Dependancies from './components/Dependancies.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Dependancies>
    <App />
  </Dependancies>
);
