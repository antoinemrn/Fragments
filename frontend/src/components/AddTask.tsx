import { BsPlusCircle } from "react-icons/bs";
import styled from "styled-components";

const AddTask = () => {
  return (
    <Container>
      <BsPlusCircle size={40}></BsPlusCircle>
    </Container>
  );
};
const Container = styled.div`
  border-radius: 15px;
  background-color: #000000;
  display: grid;
  justify-items: center;
  align-items: center;
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(15px);
  color : white;
  &:hover{
      background-color: #000000e2;
      cursor: pointer;
  }
`;
export default AddTask;
