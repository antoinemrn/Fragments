import styled from "styled-components";
import AddTask from "../components/AddTask";

const AllTasks = () => {
  return (
    <Container>
      <AddTask />
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
    content: " ";
    display: block;
    width: 100%;
    padding-top: 100%;
  }
  & > *:first-child {
    grid-row: 1 / 1;
    grid-column: 1 / 1;
  }
`;
export default AllTasks;
