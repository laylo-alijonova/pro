import React from "react";
import { useParams } from "react-router-dom";
import { products } from '../mock';

function SingleRoute() {
  const { id } = useParams();

  console.log("URL ID:", id);
  console.log("Products:", products);

  if (!Array.isArray(products)) {
    return <div style={{ color: "red" }}>Xato: mock.js topilmadi!</div>;
  }

  const productId = parseInt(id, 10);

  if (isNaN(productId)) {
    return <div style={{ color: "red" }}>Noto'g'ri ID: {id}</div>;
  }

  // Mahsulotni qidirish
  const product = products.find(p => p.id === productId);

  if (!product) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>Mahsulot topilmadi</h2>
        <p>ID: <strong>{id}</strong></p>
        <p>Mavjud ID'lar: <strong>{products.map(p => p.id).join(", ")}</strong></p>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>{product.name}</h1>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "100%", maxWidth: "400px", borderRadius: "12px" }}
      />
      <div style={{ marginTop: "20px" }}>
        <p style={{ fontSize: "24px", fontWeight: "bold", color: "#e91e63" }}>
          Narx: ${product.price}
        </p>
        {product.oldPrice && (
          <p style={{ textDecoration: "line-through", color: "#888" }}>
            Oldin: ${product.oldPrice}
          </p>
        )}
        {product.discount && (
          <p style={{ color: "green", fontWeight: "bold" }}>
            Chegirma: {product.discount}%
          </p>
        )}
        <p>{product.description}</p>
      </div>
    </div>
  );
}

export default SingleRoute;