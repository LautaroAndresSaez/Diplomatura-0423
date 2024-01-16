import { Button, Card, Image, Space } from "antd";
import { useCartStore } from "../store/useCartStore";

const Product = ({ id, title, image, price, description }) => {
  const addProduct = useCartStore((s) => s.addProduct);

  return (
    <Card
      title={title}
      extra={
        <Button
          type="primary"
          onClick={() => addProduct({ id, title, image, price })}
        >
          Agregar
        </Button>
      }
      cover={<Image width={300} src={image} />}
      style={{ width: 300, height: 1000 }}
    >
      <Card.Meta title={`$${price}`} description={description} />
    </Card>
  );
};

export default Product;
