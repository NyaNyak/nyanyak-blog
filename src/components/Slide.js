import styled from "styled-components";
import React from "react";
import Carousel from "react-material-ui-carousel";
import Science from "../image/science.png";
import "../font/font.css";
import { Paper, Button } from "@mui/material";

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #282d32;
  font-family: "Coding";
  height: 55vh;
  #button {
    outline: none;
    border: none;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  #hoverText {
    color: white;
    margin-left: 37vh;
    margin-top: 3vh;
    font-size: 2.5vh;
    font-weight: bold;
    @media (max-width: 550px) {
      margin-left: 19vh;
      margin-top: 0vw;
      font-size: 2.2vh;
    }
  }
  #title {
    font-size: 7vh;
    font-family: "Discord";
    margin-top: -15vh;
    font-weight: bold;
  }
  #discord {
    font-weight: 100;
    font-family: "DiscordBold";
    color: #5587ed;
  }
  #bee {
    font-family: "Discord";

    color: #faed7d;
  }
  #text {
    color: #d5d5d5;
    font-size: 2.2vh;
    margin-top: 1vh;
    margin-bottom: 10vh;
  }
  #lol {
    font-family: Lolfont;
    font-size: 2.5vh;
    color: #deb84f;
    font-weight: bold;
  }
`;

const Bee = styled.img`
  margin-top: -8vh;
  margin-left: 39vh;
  width: 10vh;
  position: absolute;
  height: auto;
  overfit: cover;
  @media (max-width: 550px) {
    width: 10vh;
    margin-left: 20vh;
  }
`;

const Image = styled.img`
  margin-top: 2vh;
  margin-left: 30vh;
  width: 32vh;
  height: auto;
  overfit: cover;
  position: absolute;
  border: 3px solid #c4b747;
  transform: rotate(15deg);
  &:hover {
    opacity: 0.2;
  }
  @media (max-width: 550px) {
    width: 27vh;
    margin-left: 15vh;
  }
`;

function Slide() {
  return (
    <Carousel navButtonsAlwaysInvisible duration={900}>
      <Item>
        <Content>
          <div id="title">
            <span id="discord">Discord</span> <span id="bee">BEE</span>-BOT
          </div>
          <div id="text">
            for <span id="lol">LEAGUE OF LEGENDS</span>
            <br />
            Players
          </div>
          <br />
          More Info
          <Bee src="https://mblogthumb-phinf.pstatic.net/MjAxODA1MTdfMjEx/MDAxNTI2NTQ3NTYzMDI0.GGFyQth1IVreeUdrVmYVopJlv8ZX2EsTQGqQ3h6ktjEg.r6jltvwy2lBUvB_Wh4M9xvxw-gwV4RHUR1AXSF-nqpMg.PNG.heekyun93/4fb137544b692e53.png?type=w800" />
          <Image src={Science} />
          <p id="hoverText">Usage Example</p>
          <a
            href="https://discord.com/api/oauth2/authorize?client_id=921970660669005854&permissions=8&scope=bot"
            target="_blank"
          >
            <button>INVITE NOW</button>
          </a>
          <div id="bottom">to your server</div>
        </Content>
      </Item>
      <Item>내이름은</Item>
      <Item>캐로셀</Item>
    </Carousel>
  );
}
export default Slide;
