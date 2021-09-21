import { MouseEventHandler } from "react";
import { BsPlusCircle} from "react-icons/bs";
import {ImCancelCircle} from "react-icons/im"
import styled from "styled-components";

interface AddFragmentProps {
  isAdding: boolean;
  handleClick: MouseEventHandler<HTMLDivElement>;
}

interface ContainerStylingProps {
  adding : boolean;
}

const AddFragment = ({ isAdding, handleClick }: AddFragmentProps) => { 
return (
    <Container adding={isAdding} onClick={handleClick}>
      {!isAdding && <BsPlusCircle size={40}></BsPlusCircle>}
      {isAdding && <ImCancelCircle size={40}></ImCancelCircle>}
    </Container>
  );
};

const Container = styled.div<ContainerStylingProps>`
  border-radius: 15px;
  background-color: #000000;
  display: grid;
  justify-items: center;
  align-items: center;
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(15px);
  color: white;
  &:hover {
    background-color: #000000e2;
    cursor: pointer;
  }
  ${({ adding }) => adding && `
    background-color: #f84e4e;
  `}
`;
export default AddFragment;
