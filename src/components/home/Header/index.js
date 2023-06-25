import { Headline } from "./styled";

const Header = () => {
  return (
    <div>
      <Headline>
        <spna>My Todo List</spna>
        <span>React</span>
      </Headline>
      <div>
        <span>제목</span>
        <input type="text" />
        <span>내용</span>
        <input type="text" />
        <input type="submit" value="추가하기" />
      </div>
    </div>
  );
};

export default Header;
