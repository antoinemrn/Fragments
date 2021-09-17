import styled from "styled-components";
import NavMenu from "./components/NavMenu";
import { BrowserRouter, Route } from "react-router-dom";
import AllTasks from "./screens/AllTasks";
import Header from "./components/Header";

const App = () => {
  return (
    <AppContainer>
      <BrowserRouter>
        <NavContainer>
          <BrandName>Fragments</BrandName>
          <NavMenu />
        </NavContainer>
        <Body>
          <Header></Header>
          <Content>
            <Route path="/taskList">
              <AllTasks></AllTasks>
            </Route>
          </Content>
        </Body>
      </BrowserRouter>
    </AppContainer>
  );
};

const AppContainer = styled.div`
  margin: 0px;
  height: 100%;
  background-color: #ffffff;
  display: grid;
  grid-template-columns: auto 1fr;
`;
const Body = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
`;
const Content = styled.div``;
const NavContainer = styled.div`
  border-right: solid 1px lightgrey;
  background-color: #ebebeb;
`;
const BrandName = styled.div`
  font-size: 1.5em;
  color: #000000;
  text-transform: uppercase;
  padding: 20px;
  font-weight: bold;
`;

export default App;
