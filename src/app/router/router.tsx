import { createBrowserRouter } from 'react-router';
import App from '@/app/App';
import { HomePage } from '@/pages/home';
import { FavoritePage } from '@/pages/favorite/index';
import { PlacePage } from '@/pages/place/index';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: 'favorite',
        Component: FavoritePage,
      },
      {
        path: 'place/:id',
        Component: PlacePage,
      },
    ],
  },
]);
