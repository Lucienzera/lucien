import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { loginAction, loginLoader } from './modules/login/routeUtil/routeUtils';
import LoginScreen from './modules/login/view/LoginScreen';
import GeneralErrorScreen from './modules/shared/GeneralError';
import AdminRoute from './route/AdminRoute';
import { DeciderRoute } from './route/DeciderRoute';
import UserRoute from './route/UserRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DeciderRoute />,
    errorElement: <GeneralErrorScreen />,
  },
  {
    path: '/login',
    action: loginAction,
    loader: loginLoader,
    element: <LoginScreen />,
    errorElement: <GeneralErrorScreen />,
  },

  // TODO: both dashboard and admin dashboard need to add a loader to check for token so you wont be able to go between screens interchangeably
  {
    path: '/dashboard',
    element: <UserRoute />,
    errorElement: <GeneralErrorScreen />,
  },
  {
    path: '/admin-dashboard',
    element: <AdminRoute />,
    errorElement: <GeneralErrorScreen />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
