import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import PublicRoute from "../components/PublicRoute/PublicRoute";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const AuthLayout = lazy(() => import("../pages/AuthLayout/AuthLayout"));
const RegisterPage = lazy(() => import("../pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const ProductsPage = lazy(() => import("../pages/ProductsPage/ProductsPage"));
const FavoritePage = lazy(() => import("../pages/FavoritePage/FavoritePage"));
const BasketPage = lazy(() => import("../pages/BasketPage/BasketPage"));
const ProfilePage = lazy(() => import("../pages/ProfilePage/ProfilePage"));
const AddProductPage = lazy(() =>
  import("../pages/AddProductPage/AddProductPage")
);
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));

const UserRoutes = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route element={<AuthLayout />}> */}
        <Route element={<PublicRoute />}>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Route>
        {/* </Route> */}
        <Route element={<PrivateRoute />}>
          <Route path="/favorites" element={<FavoritePage />} />
          <Route path="/basket" element={<BasketPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/add-product" element={<AddProductPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
