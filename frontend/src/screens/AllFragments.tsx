import { useState } from "react";
import styled from "styled-components";
import AddFragment from "../components/AddFragment";
import EditFragment from "../components/EditFragment";
import FragmentList from "../components/FragmentList";
import FragmentModel from "../models/FragmentModel";
import { v4 as uuidv4 } from "uuid";

const AllFragments = () => {
  const [allFragments, setallFragments] = useState<FragmentModel[]>([]);
  const [isEditFragment, setIsEditFragment] = useState<boolean>(false);

  const handleAddFragment = (fragment: FragmentModel) => {
    if (fragment.title) {
      var newList = allFragments;
      console.log(fragment);
      newList?.unshift({
        id: uuidv4(),
        title: fragment.title,
        description: fragment.description,
      });
      setallFragments(newList);
    }
    setIsEditFragment(!isEditFragment);
  };

  const handleAddClick = () => {
    setIsEditFragment(!isEditFragment);
  };

  return (
    <Container>
      <AddFragment isAdding={isEditFragment} handleClick={handleAddClick} />
      {isEditFragment && <EditFragment handleEdit={handleAddFragment} />}
      {allFragments && <FragmentList fragments={allFragments} />}
    </Container>
  );
};
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-auto-rows: 1fr;
  grid-gap: 30px;
  padding: 20px;
  &::before {
    content: "";
    width: 0;
    padding-bottom: 100%;
    grid-row: 1 / 1;
    grid-column: 1 / 1;
  }
  & > *:first-child {
    grid-row: 1 / 1;
    grid-column: 1 / 1;
  }
`;

export default AllFragments;
