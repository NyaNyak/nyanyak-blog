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

    @media (max-width: 420px) {
      width: 30vw;
      height: 5vh;
      font-size: 4vw;
      margin-bottom: 2vw;
    }
  }
  #bottom {
    font-size: 2.8vh;
    font-family: "Bazzi";
    @media (max-width: 420px) {
      font-size: 4.5vw;
    }
  }
`;

const Content = styled.div`
  display: flex;
  color: #d5d5d5;
  flex-direction: column;
  position: relative;
  @media (max-width: 420px) {
    align-items: center;
    justify-content: center;
  }
  #hoverText {
    color: white;
    margin-left: 40vh;
    font-family: "Coding";
    letter-spacing: 2px;
    margin-top: 15vh;
    font-size: 2.5vh;
    font-weight: bold;

    @media (max-width: 420px) {
      margin-left: 7vw;
      font-size: 3.5vw;
      margin-top: 5vh;
      margin-bottom: 5vh;
    }
  }
  #title {
    font-size: 7vh;
    font-family: "Bazzi";
    margin-top: 0vh;
    font-weight: bold;
    margin-bottom: -1.3vh;
    @media (max-width: 1160px) {
      font-size: 5.5vh;
    }
    @media (max-width: 780px) {
      font-size: 5vh;
    }
    @media (max-width: 420px) {
      font-size: 8vw;
      margin-top: 0vh;
      margin-bottom: 5vh;
    }
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
  }
  #forlol {
    margin-top: -2.5vh;
    #for {
      font-family: "Bazzi";
      font-size: 2.3vh;
      @media (max-width: 420px) {
        font-size: 4.5vw;
      }
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
      @media (max-width: 420px) {
        font-size: 5vw;
      }
    }
  }

  #introduce {
    margin-top: -15vh;
    margin-bottom: 10vh;

    #beebot {
      font-size: 4.5vh;
      color: #ffdd73;
      margin-top: 1vh;
      @media (max-width: 420px) {
        font-size: 6vw;
        margin-bottom: 0.5vh;
      }
    }
    @media (max-width: 420px) {
      font-size: 5vw;
      margin-top: 10vh;
      margin-bottom: 0vh;
    }
  }
`;

const Bee = styled.img`
  margin-top: 10vh;
  margin-left: 42vh;
  width: 10vh;
  position: absolute;
  height: auto;
  -webkit-user-drag: none;
  overfit: cover;

  @media (max-width: 420px) {
    margin-left: 0vh;
    margin-top: -30vh;
    width: 8vh;
  }
`;

const Image = styled.img`
  margin-top: 20vh;
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

  @media (max-width: 420px) {
    width: 20vh;
    margin-left: 0vh;
    margin-top: -7vh;
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
  @media (max-width: 420px) {
    width: 30vw;
    height: 5vh;
    font-size: 4vw;
    margin-left: 4vw;
    margin-top: -2vh;
    margin-bottom: 0vw;
  }
`;

const Butt = styled.div`
  display: flex;
  flex-direction: column;
  a {
    text-decoration: none;
    color: #d5d5d5;
  }
  @media (max-width: 420px) {
    display: inline-block;
  }
`;

function Proj() {
  return (
    <Carousel navButtonsAlwaysInvisible duration={1000}>
      <Item>
        <Content>
          <div id="title">
            <span id="discord">Discord</span> <span id="bee">BEE</span>-BOT
            <div id="forlol">
              <span id="for">for </span>
              <span id="lol">LEAGUE OF LEGENDS</span>
            </div>
          </div>
          <div id="text">
            <div id="hoverText">Usage Example</div>
            <div id="introduce">
              협곡의 귀여운 서포터<div id="beebot">『꿀벌봇』</div>
            </div>
          </div>
          <br />

          <Bee src="https://mblogthumb-phinf.pstatic.net/MjAxODA1MTdfMjEx/MDAxNTI2NTQ3NTYzMDI0.GGFyQth1IVreeUdrVmYVopJlv8ZX2EsTQGqQ3h6ktjEg.r6jltvwy2lBUvB_Wh4M9xvxw-gwV4RHUR1AXSF-nqpMg.PNG.heekyun93/4fb137544b692e53.png?type=w800" />
          <Image src={Science} />

          <Butt>
            <button id="info">
              <a
                href="https://github.com/NyaNyak/discord-beebot"
                target="_blank"
              >
                자세히 보기
              </a>
            </button>

            <Invite>
              <a
                href="https://discord.com/api/oauth2/authorize?client_id=921970660669005854&permissions=8&scope=bot"
                target="_blank"
              >
                서버에 추가
              </a>
            </Invite>
          </Butt>
          <div id="bottom">지금 바로 데려가세요!</div>
        </Content>
      </Item>
      <Item>내이름은</Item>
      <Item>캐로셀</Item>
    </Carousel>
  );
}
export default Proj;
