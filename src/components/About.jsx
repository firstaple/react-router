import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <p>아래 버튼을 누르면 Home으로 돌아갑니다</p>
      <button>
        <Link to="/">Home으로 가기</Link>
      </button>
    </div>
  );
};

export default About;
