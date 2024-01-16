import { useState } from "react";
import "./App.css";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { ConfigProvider, FloatButton, theme } from "antd";
import { useCartStore } from "./store/useCartStore";

function App() {
  const cart = useCartStore((s) => s.cart);
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!open);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#40ed9c",
        },
      }}
    >
      <FloatButton
        shape="circle"
        type="primary"
        onClick={toggleOpen}
        style={{ right: 15, top: 15 }}
        badge={{ count: cart.length }}
        icon={<ShoppingCartOutlined />}
      />
      <Cart open={open} onClose={toggleOpen} />
      <Products />
      {
        // <Product name={product.name} src={product.src} price={product.price} desc={product.desc} />
      }
    </ConfigProvider>
  );
}

export default App;
