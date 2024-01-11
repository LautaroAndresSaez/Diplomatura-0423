import React from "react";
import { Button, Card, Image } from "antd";

const ExampleCard = ({ title, price, description, image }) => {
  return (
    <Card
      title={title}
      hoverable
      style={{ width: "15rem" }}
      cover={<Image src={image} />}
      extra={<Button type="primary">btn</Button>}
    >
      <Card.Meta title={title} description={description} />
    </Card>
  );
};
export default ExampleCard;
