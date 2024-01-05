const Product = ({ title, image, price, description }) => {
  return (
    <li className="product">
      <h2>{title}</h2>
      <img src={image} />
      <p>${price}</p>
      <p>{description}</p>
      <button>Aceptar</button>
    </li>
  );
};

export default Product;
