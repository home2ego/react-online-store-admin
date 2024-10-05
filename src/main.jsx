import { createRoot } from 'react-dom/client';
import StoreFront from './StoreFront';
import './index.css';

function App() {
  return <StoreFront />;
}

createRoot(document.getElementById('root')).render(<App />);
