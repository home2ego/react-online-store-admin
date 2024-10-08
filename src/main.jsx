import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import StoreFront from './StoreFront';
import './index.css';

function App() {
  return <StoreFront />;
}

// add reload page button
let root = createRoot(document.getElementById('root'));

const reload = () => {
  root.unmount();
  root = createRoot(document.getElementById('root'));
  console.log('Page reloaded');
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
};
reload();

const button = document.createElement('button');
button.textContent = 'Reload page';
button.classList.add('btn-reload');
button.addEventListener('click', reload);
document.body.insertAdjacentElement('afterbegin', button);
