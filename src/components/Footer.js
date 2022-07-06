import styled from "styled-components";
import "../font/font.css";
import Youtube from "../image/YouTube.png";
import GitHub from "../image/GitHub.png";

const Container = styled.div`
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  height: 7vh;
  position: relative;
  z-index: 4;
  background-color: #f6f6f6;
  color: #b0b0a3;
  font-family: "Coding";
  @media (max-width: 500px) {
    height: 20vh;
  }
`;

const Wrapper = styled.div`
  display: flex;
  @media (max-width: 500px) {
    align-items: center;
    flex-direction: column;
  }
`;
const Title = styled.div`
  font-size: 2vh;
  letter-spacing: 3px;
  color: #4c4c4c;
  margin-left: 20px;
  font-family: "Coding";
  @media (max-width: 500px) {
    font-size: 2.5vh;
  }
`;
const Email = styled.div`
  font-size: 1.6vh;
  color: #747474;
  margin-left: 50px;
  margin-right: 20px;
  font-family: "Coding";
  @media (max-width: 500px) {
    margin-top: 20px;
    font-size: 2vh;
  }
`;
const Icons = styled.div`
  @media (max-width: 500px) {
    margin-top: 20px;
    flex-direction: row;
  }
`;
const GIcon = styled.img`
  margin-left: 20px;
  margin-right: 20px;
  width: 28px;
  height: 25px;
  @media (max-width: 500px) {
    margin-right: 30px;
    width: 30px;
    height: 30px;
  }
`;
const YIcon = styled.img`
  margin-left: 20px;
  width: 60px;
  height: 25px;
  @media (max-width: 500px) {
    margin-left: 30px;
    width: 60px;
    height: 30px;
  }
`;

function Footer() {
  return (
    <Container>
      <Wrapper>
        <Title>⚙️contact</Title>
        <Email>📧 chsgood1004@gmail.com</Email>
        <Icons>
          <a href="https://github.com/NyaNyak" target="_blank">
            <GIcon src={GitHub} />
          </a>
          <a
            href="https://www.youtube.com/playlist?list=PL1wzmqWMf9vfZCH5LBv4fsWSzmFjLuajH"
            target="_blank"
          >
            <YIcon src={Youtube} />
          </a>
        </Icons>
      </Wrapper>
    </Container>
  );
}

export default Footer;
