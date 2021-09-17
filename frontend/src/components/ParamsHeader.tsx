import styled, { css } from "styled-components";
import { RiNotification3Line } from "react-icons/ri";
import { BsGear } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import userImage from "../resources/img/avatar.jpg";
const ParamsHeader = () => {
  return (
    <Container>
      <div></div>
      <IconNoti />
      <IconParam />
      <UserParam>
        <UserImage src={userImage} alt="Test" />
        <UserName>
          <span>Le Petit Prince</span>
          <MdKeyboardArrowDown />
        </UserName>
      </UserParam>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto auto;
  grid-gap: 50px;
`;
const iconStyle = css`
  width: 100%;
  height: 100%;
  &:hover {
    cursor: pointer;
  }
`;
const IconNoti = styled(RiNotification3Line)`
  ${iconStyle}
`;
const IconParam = styled(BsGear)`
  ${iconStyle}
`;
const UserParam = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  margin-right: 10px;
  background-color: #ebebeb;
  border-radius: 25px;
  overflow: hidden;
`;
const UserName = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 5px;
  align-items: flex-end;
  color: #000000;
  padding: 10px;
`;
const UserImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  resize: "contain";
  flex: 1;
`;

export default ParamsHeader;
