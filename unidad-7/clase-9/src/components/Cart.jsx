import { Avatar, Button, Drawer, List } from "antd";
import { useCartStore } from "../store/useCartStore";
import { DeleteFilled } from "@ant-design/icons";

const Cart = ({ open, onClose }) => {
  const cart = useCartStore((s) => s.cart);
  const deleteProduct = useCartStore((s) => s.deleteProduct);

  const handleBuy = () => {
    console.log("Compra realizada!");
  };

  const getTotalPrice = () =>
    cart.reduce((total, product) => total + product.price, 0);

  const getTotalPriceFor = () => {
    let total = 0;
    for (const product of cart) {
      total += product.price;
    }
    return total;
  };

  return (
    <Drawer
      title="Tu carrito"
      width={600}
      onClose={onClose}
      open={open}
      extra={
        <Button type="primary" onClick={handleBuy}>
          Comprar
        </Button>
      }
    >
      <List
        header={`Total: $${getTotalPrice()}`}
        dataSource={cart}
        renderItem={(product, index) => (
          <List.Item key={`product-cart-${product.id}`}>
            <List.Item.Meta
              avatar={<Avatar src={product.image} />}
              title={product.title}
              description={`$${product.price}`}
            />
            <Button
              type="primary"
              danger
              shape="circle"
              icon={<DeleteFilled />}
              onClick={() => deleteProduct(index)}
            />
          </List.Item>
        )}
      />
    </Drawer>
  );
};

export default Cart;
