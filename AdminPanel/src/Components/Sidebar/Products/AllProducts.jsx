import React, { useEffect, useState } from 'react';

function AllProducts() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/products")
      .then((res) => res.json())
      .then((data) => setAllProducts(data))
      .catch((err) => console.error("Error fetching medicines:", err));
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {allProducts.map((product, index) => (
          <li key={index}>
            {product.name || JSON.stringify(product)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllProducts;