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

  background-color: #212121;
  font-family: "Coding";
  height: 55vh;
  #info {
    outline: none;
    border: 2px solid #d5d5d5;
    width: 23vh;
    height: 6vh;
    color: #d5d5d5;
    background-color: transparent;
    margin-top: -8vh;
    margin-bottom: 2.3vh;
    border-radius: 14px;
    font-size: 2.8vh;
    font-family: "Bazzi";
  }
  #bottom {
    font-size: 2.8vh;
    font-family: "Bazzi";
  }
`;

const Content = styled.div`
  display: flex;
  color: #d5d5d5;
  flex-direction: column;
  position: relative;
  #hoverText {
    color: white;
    margin-left: 38vh;
    margin-top: -5vh;
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
    font-family: "Bazzi";
    margin-top: -10vh;
    font-weight: bold;
    margin-bottom: -1.3vh;
  }
  #discord {
    font-weight: 100;
    font-family: "DiscordBold";
    color: #5587ed;
  }
  #bee {
    font-family: "Bazzi";

    color: #faed7d;
  }
  #text {
    color: #d5d5d5;
    font-size: 3vh;
    font-family: "Bazzi";
    margin-top: 1vh;
    margin-bottom: 10vh;
  }
  #lol {
    font-family: Lolfont;
    font-size: 3vh;
    background-image: linear-gradient(30deg, #a78329 0%, #d6b96f 80%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;

    margin-bottom: 5vh;
  }
  #for {
    font-family: "Bazzi";
    font-size: 2.3vh;
  }
  #introduce {
    margin-top: 3vh;
    #beebot {
      font-size: 4.5vh;
      margin-top: 1vh;
    }
  }
  #bung {
    margin-left: 11vh;
  }
`;

const Bee = styled.img`
  margin-top: -4vh;
  margin-left: 42vh;
  width: 10vh;
  position: absolute;
  height: auto;
  -webkit-user-drag: none;
  overfit: cover;
  @media (max-width: 550px) {
    width: 10vh;
    margin-left: 20vh;
  }
`;

const Image = styled.img`
  margin-top: 6vh;
  margin-left: 33vh;
  width: 32vh;
  height: auto;
  -webkit-user-drag: none;
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
const Invite = styled.button`
  outline: none;
  border: 2px solid #d5d5d5;
  width: 23vh;
  height: 6vh;
  color: #d5d5d5;
  border-radius: 14px;
  font-size: 2.8vh;
  font-family: "Bazzi";
  background-color: transparent;
  margin-bottom: 1.5vh;
`;

function Proj() {
  return (
    <Carousel navButtonsAlwaysInvisible duration={1000}>
      <Item>
        <Content>
          <div id="title">
            <span id="discord">Discord</span> <span id="bee">BEE</span>-BOT
          </div>
          <div id="text">
            <span id="for">for </span>
            <span id="lol">LEAGUE OF LEGENDS</span>
            <span id="bung">붕붕!</span>
            <br />
            <div id="introduce">
              협곡의 귀여운 서포터<div id="beebot">『꿀벌봇』</div>
            </div>
          </div>
          <br />
          <button id="info">자세히 보기</button>

          <Bee src="https://mblogthumb-phinf.pstatic.net/MjAxODA1MTdfMjEx/MDAxNTI2NTQ3NTYzMDI0.GGFyQth1IVreeUdrVmYVopJlv8ZX2EsTQGqQ3h6ktjEg.r6jltvwy2lBUvB_Wh4M9xvxw-gwV4RHUR1AXSF-nqpMg.PNG.heekyun93/4fb137544b692e53.png?type=w800" />
          <Image src={Science} />
          <p id="hoverText">Usage Example</p>

          <a
            href="https://discord.com/api/oauth2/authorize?client_id=921970660669005854&permissions=8&scope=bot"
            target="_blank"
          >
            <Invite>서버에 추가</Invite>
          </a>
          <div id="bottom">지금 바로 데려가세요!</div>
        </Content>
      </Item>
      <Item>내이름은</Item>
      <Item>캐로셀</Item>
    </Carousel>
  );
}
export default Proj;
