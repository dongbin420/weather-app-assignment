import { createBrowserRouter } from 'react-router';
import App from '../App';
import { HomePage } from '../../pages/home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);
