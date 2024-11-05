import { RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { AppRouter } from './router';
import './global.css';

createRoot(document.getElementById('root')).render(
  <RouterProvider router={AppRouter}/>
)
