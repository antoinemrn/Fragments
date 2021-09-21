import React from "react";
import styled from "styled-components";
import FragmentModel from "../models/FragmentModel";

interface FragmentListProps {
  fragment: FragmentModel;
}

const Fragment = ({ fragment }: FragmentListProps) => {
  return (
    <Container>
      <div>{fragment.title}</div>
    </Container>
  );
};
const Container = styled.div`
  border-radius: 15px;
  background-color: #fdfff0;
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(15px);
  color: black;
  padding: 10px;
`;
export default Fragment;
