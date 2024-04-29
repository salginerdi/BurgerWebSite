// eslint-disable-next-line react/prop-types
const MenuItem = ({ image, name, content, price }) => {
  return (
    <div>
      <div className="menuItem">
        <div style={{ backgroundImage: `url(${image})` }}></div>
        <h1 style={{ marginBottom: "10px" }}>{name}</h1>
        <h6 style={{ marginTop: "20" }}>{content}</h6>
        <p style={{ marginTop: "20px", marginBottom: "10px" }}>
          <i style={{ color: "red" }}>{price} ₺</i>
        </p>
      </div>
    </div>
  );
};

export default MenuItem;
