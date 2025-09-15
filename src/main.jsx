import { createRoot } from 'react-dom/client';
import "slick-carousel/slick/slick.css";
import App from './App.jsx';
import { ContextApi } from './components/ContextApi.jsx';
import './index.css';
import { Provider } from 'react-redux'
import Store from './Store.js';


createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
  <ContextApi>
    <App />
  </ContextApi>
  </Provider>
)
