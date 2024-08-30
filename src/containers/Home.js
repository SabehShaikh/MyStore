import React, { useEffect, useState } from "react";
import DrawerAppBar from "../components/AppBar";
import MediaCard from "../components/ProductCard";
import axios from "axios";
import BasicModal from "../components/BasicModal";
import { useSearchParams } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [detail, setDetail] = useState({});

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    axios(`https://fakestoreapi.com/products`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // For filtering based on category:
  useEffect(() => {
    const category = searchParams.get("category");
  
    if (category && category !== "home") {
      // Fetch products based on category
      axios(`https://fakestoreapi.com/products/category/${category}`)
        .then((res) => setProducts(res.data))
        .catch((err) => console.error(err));
    } else {
      // Fetch all products when no category or when category is 'all' or 'home'
      axios("https://fakestoreapi.com/products")
        .then((res) => setProducts(res.data))
        .catch((err) => console.error(err));
    }
  }, [searchParams]);

  const viewDetails = (id) => {
    axios(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setDetail(res.data);
        setOpen(true);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div style={{ padding: "24px" }}>
      <DrawerAppBar />
      <BasicModal
        detail={detail}
        open={open}
        handleClose={() => setOpen(false)}
      />

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "16px",
        }}
      >
        {products.map((product) => (
          <div key={product.id}>
            <MediaCard viewDetails={viewDetails} product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
