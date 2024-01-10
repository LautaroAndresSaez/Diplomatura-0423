import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import ProductPage from "./Pages/ProductPage";
import BasicLayout from "./layouts/BasicLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BasicLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/products/:id" element={<ProductPage />} />
        </Route>
        <Route path="/auth" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
