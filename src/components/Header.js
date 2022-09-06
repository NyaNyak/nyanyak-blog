import styled from "styled-components";
import "../font/font.css";
import Category from "./Category";
import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import MenuBt from "../image/MenuButton.png";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  height: 6vh;
  position: sticky;
  z-index: 20;
  top: 0vh;
  left: 0vw;
  color: #d5d5d5;
  background-color: #5d5d5d;
  @media (max-width: 920px) {
    height: 5vh;
    top: 0vh;
  }
`;

const LogoBox = styled.div`
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: row;
`;

const Logo = styled.div`
  font-size: 3vh;
  font-family: "Coding";
  @media (max-width: 920px) {
    font-size: 2.5vh;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const LeftMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2vw;
  @media (max-width: 1000px) {
    margin-left: 2vw;
  }
`;

const RightMenu = styled.div`
  display: flex;
  margin-left: 200px;
  margin-top: 20px;
  @media (max-width: 1000px) {
    margin-left: calc(24vw - 29.7px);
  }
`;

const Menu = styled.button`
  background-color: #5d5d5d;
  border: none;
  margin-right: 2vh;
  &:hover {
    cursor: pointer;
  }
`;

const Image = styled.img`
  width: 2vh;
  height: 1.8vh;
`;

function Header() {
  const [visible, setVisible] = useState(false);
  const location = useLocation().pathname;
  const isMobile = useMediaQuery({
    query: "(max-width:920px)",
  });
  return (
    <Container>
      <Wrapper>
        {visible && <Category />}
        <LeftMenu></LeftMenu>
        <LogoBox>
          {isMobile && (
            <Menu
              onClick={() => {
                setVisible(!visible);
                console.log(visible);
              }}
            >
              <Image src={MenuBt} />
            </Menu>
          )}
          <Link
            to="/"
            onClick={() => {
              if (location == "/") {
                console.log(location);
                window.location.reload("/");
                window.scrollTo(0, 0);
              }
            }}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Logo>code.Nyak()</Logo>
          </Link>
        </LogoBox>
        <RightMenu></RightMenu>
      </Wrapper>

      {!isMobile && <Category />}
    </Container>
  );
}

/*
<FaceBookLogin
        appId=process.env.
        autoLoad={true}
        fields="name, email, picture"
        callback={responseFacebook}
      />
*/

export default Header;
