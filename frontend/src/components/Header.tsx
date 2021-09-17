import styled from "styled-components";
import ParamsHeader from "./ParamsHeader";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <Container>
      <SearchBar/>
      <ParamsHeader/>
    </Container>
  );
};
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 10px;
`;
export default Header;
