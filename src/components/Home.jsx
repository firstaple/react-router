import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [adressName, setAdressName] = useState("");
  const onChange = (e) => {
    setAdressName(e.target.value);
  };

  return (
    <div>
      <h1>값을 입력받아서 페이지를 이동합니다</h1>
      <input type="text" onChange={onChange} value={adressName} />
      <Link to={`/${adressName}`}>페이지 이동</Link>
    </div>
  );
};

export default Home;
