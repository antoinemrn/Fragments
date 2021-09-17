import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
const SearchBar = () => {
  return (
    <Container>
      <IconMgGlass></IconMgGlass>
      <SearchInput placeholder="search..." type="text" />
    </Container>
  );
};
const Container = styled.div`
  display: grid;
  overflow: hidden;
  grid-template-columns: auto 1fr;
  align-items: center;
  border-radius: 5px;
  background-color: #ebebeb;
  color: black;
  width: 60%;
`;
const SearchInput = styled.input`
  background-color: transparent;
  border: none;
  padding: 10px 5px 10px 5px;
  color: #000000;
  &:focus {
    outline: none;
  }
`;
const IconMgGlass = styled(FiSearch)`
  width: 80%;
  height: 80%;
  margin-left: 5px;
`;
export default SearchBar;
