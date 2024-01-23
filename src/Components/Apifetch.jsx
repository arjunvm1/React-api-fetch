// 
import React, { useEffect, useState } from "react";
import { Button, Card, Spinner } from "react-bootstrap";
import "./api.css";

function Apifetch() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const base_url = "https://dummyjson.com/products";

  // API fetch
  const getData = async () => {
    try {
      const result = await fetch(base_url);
      if (!result.ok) {
        throw new Error(`Failed to fetch data. Status: ${result.status}`);
      }
      const products = await result.json();
      setProduct(products.products);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="card">
      {loading && <Spinner animation="border" role="status" />}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <>
          {product.map((item) => (
            // Display as card
            <Card key={item.id} style={{ width: "18rem" }}>
              <Card.Img variant="top" src={item.thumbnail} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Card.Text>Price: {item.price}</Card.Text>
                <Card.Text>Category: {item.category}</Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          ))}
        </>
      )}
    </div>
  );
}

export default Apifetch;
