import { Headline, InputBox, FormLabel, FormInput, AddBtn } from "./styled";

const Header = () => {
  return (
    <div>
      <Headline>
        <spna>My Todo List</spna>
        <span>React</span>
      </Headline>
      <InputBox>
        <FormLabel>제목</FormLabel>
        <FormInput type="text" />
        <FormLabel>내용</FormLabel>
        <FormInput type="text" />
        <AddBtn type="submit" value="추가하기" />
      </InputBox>
    </div>
  );
};

export default Header;
