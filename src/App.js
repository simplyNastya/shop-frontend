import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';

import { BrowserRouter } from 'react-router-dom';
import AuthLayout from './pages/AuthLayout/AuthLayout'

import Navbar from './components/Navbar/Navbar'
import UserRoutes from './services/userRoutes'

import RegisterPage from './pages/RegisterPage/RegisterPage';

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <AuthLayout> */}
          <BrowserRouter basename='shop-frontend'>
            <Navbar />
            {/* <RegisterPage /> */}
            <UserRoutes />
          </BrowserRouter>
        {/* </AuthLayout> */}
      </PersistGate>
    </Provider>
  );
};
