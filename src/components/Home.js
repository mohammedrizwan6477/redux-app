import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
const Home = () => {
  const dispatch = useDispatch();
  const select = useSelector((state) => state);
  const [data, setData] = useState([]);
  const product = select.CounterReducer.product;
  console.log("product", product);
  const getData = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    dispatch({
      type: "ADD_PRODUCT",
      payload: res.data,
    });
    console.log(res);
  };

  const handleDelete = (index) => {
    dispatch({
      type: "PRODUCT_DELETE",
      payload: index,
    });
  };
  useEffect(() => {
    if (product.length <= 0) {
      getData();
    }
  }, []);
  useEffect(() => {
    setData(product);
  }, [product]);
  return (
    <div>
      <h1>Home</h1>
      {data.map((item, index) => {
        return <li onClick={() => handleDelete(index)}>{item.title}</li>;
      })}
    </div>
  );
};

export default Home;
