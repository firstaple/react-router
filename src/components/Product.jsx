import { useState } from "react";
import { Link } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = useState("");

  const onChange = (e) => {
    setProducts(e.target.value);
  };

  return (
    <div>
      <h1>값을 입력받아서 페이지를 이동합니다</h1>
      <input type="text" onChange={onChange} value={products} />
      <Link to={`/product/${products}`}>페이지 이동</Link>
    </div>
  );
};

export default Product;
