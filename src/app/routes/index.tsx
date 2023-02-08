import { Navigate, useLocation, useRoutes } from 'react-router-dom';
import LayoutWrapper from '../pages/Layout/LayoutWrapper';
import path from './path';

export default function Router() {
  const localtion = useLocation();
  return useRoutes([
    {
      path: path.root,
      element: <LayoutWrapper />,

      children: [
        {
          element: <LayoutWrapper />,
          path: path.main,
        },
      ],
    },
  ]);
}
