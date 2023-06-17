import Mockman from "mockman-js";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { HomePage } from "./pages/HomePage/HomePage";
import { WishlistPage } from "./pages/WishlistPage/WishlistPage";
import { CartPage } from "./pages/CartPage/CartPage";
import { ProductlistPage } from "./pages/ProductlistPage/ProductlistPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { LoginPage } from "./pages/AuthenticationPages/LoginPage/LoginPage";
import { SignupPage } from "./pages/AuthenticationPages/signup/SignupPage";
import { SingleproductPage } from "./pages/SingleproductPage/SingleproductPage";
import { RequiresAuth } from "./utils/RequiresAuth"
import { LogoutPage } from "./pages/AuthenticationPages/logout/LogoutPage";
import { CheckoutPage } from "./pages/CheckoutPage/CheckoutPage";
import { OrderplacedPage } from "./pages/OrderplacedPage/OrderplacedPage";



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/productlist" element={<ProductlistPage />} />
        <Route path="/productlist/:productId" element={<SingleproductPage />} />
        <Route
          path="/wishlist"
          element={
            <RequiresAuth>
              <WishlistPage />
            </RequiresAuth>
          }
        />
        <Route
          path="/cart"
          element={
            <RequiresAuth>
              <CartPage />
            </RequiresAuth>
          }
        />
        <Route
          path="/profile"
          element={
            <RequiresAuth>
              <ProfilePage />
            </RequiresAuth>
          }
        />
        <Route
          path="/checkout"
          element={
            <RequiresAuth>
              <CheckoutPage />
            </RequiresAuth>
          }
        />
        <Route
          path="/orderplaced"
          element={
            <RequiresAuth>
              <OrderplacedPage />
            </RequiresAuth>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;