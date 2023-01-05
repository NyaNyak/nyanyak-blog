import styled, { keyframes } from "styled-components";
import React from "react";
import { useEffect, useRef, useState } from "react";
import Fade from "react-reveal/Fade";
import "../font/font.css";
import "./snow.css";
import Back from "../image/background.jpg";
import icon from "../image/scroll.jpg";
import Flip from "react-reveal/Flip";
import Zoom from "react-reveal/Zoom";
import { Link } from "react-router-dom";
import Bounce from "react-reveal/Bounce";
import Prof from "../image/profile.jpg";
import Proj from "../components/Proj";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #272727;
  margin-left: 28vh;
  font-family: "Coding";
  flex-direction: column;
  letter-spacing: 3px;
  heigth: 100%;
  color: white;
  overflow-y: hidden;
  @media (max-width: 920px) {
    margin-left: 0vw;
  }
`;

const Snow = styled.div`
  margin-left: auto;
`;
const SnowBtn = styled.button`
  margin-left: auto;
`;

const Wrapper = styled.div`
  height: 94vh;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 920px) {
    margin-left: 0vw;
  }
`;
const Intro = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  text-align: center;
  #div1 {
    color: #d5d5d5;
    text-align: left;
    font-size: 2vh;
    font-weight: 100;
  }
  #div0 {
    font-weight: 700;
    color: #f2f2f2;
    font-size: 6vh;
  }
  hr {
    width: 40vh;
    margin-top: 4vh;
    margin-bottom: 1vh;
    border: 1px dashed #7a7a7a;
  }
  #div2 {
    font-weight: 600;
    font-size: 2.5vh;
    color: #de9b67;
  }
  #div3 {
    font-size: 2vh;
    color: #d5d5d5;
  }
  #span1 {
    color: #a3d6e0;
  }
  #span2 {
    color: #ebe8c0;
  }
  #span3 {
    color: #ece382;
  }
`;

const Profile = styled.div`
  height: 100vh;
`;

const Bg = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const BgImage = styled.img`
  object-fit: cover;
  width: 100%;
  -webkit-user-drag: none;
  height: 100vh;
  opacity: 0.4;
`;

const Pf = styled.div`
  color: #e5e5e5;
  position: absolute;
  z-index: 5;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  #name {
    margin-top: 2.5vh;
    margin-bottom: 2vh;
    font-size: 2.5vh;
  }
  #status {
    font-size: 2vh;
  }
`;

const Button = styled.button`
  margin-top: 7vh;
  background-color: transparent;
  border: 2px solid #e5e5e5;
  color: #e5e5e5;
  width: 22vh;
  height: 6vh;
  font-family: "Coding";
  font-size: 2vh;
  letter-spacing: 2px;
  &:hover {
    cursor: pointer;
    background-color: rgba(39, 39, 39, 0.4);
  }
`;
const Status = styled.div`
  text-align: left;
  border-left: 2px solid #e5e5e5;
  padding: 0vh 0vh 0vh 1vh;
`;
const PfImage = styled.img`
  width: 20vh;
  height: 22vh;
  -webkit-user-drag: none;
  border-radius: 30%;
  overflow: hidden;
`;
const Introduce = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const ScrollButton = styled.button`
  @keyframes flash {
    0%,
    20%,
    40%,
    to {
      opacity: 1;
    }

    30% {
      opacity: 0;
    }
  }
  margin-bottom: 7vh;
  background-color: transparent;
  border: none;
  color: #e5e5e5;
  animation: flash 4s infinite;
  width: 8vh;
  height: 8vh;
  font-family: "Discord";
  font-weight: bold;
  font-size: 3vh;
  letter-spacing: 5px;
  &:hover {
    cursor: pointer;
  }
`;
const Icon = styled.img`
  width: 7vh;
  height: auto;
  filter: brightness(0.8);
  filter: opacity(0.5);
`;
const Project = styled.div`
  width: 100%;
`;
const body = document.querySelector("body");
const MIN_DURATION = 10;
let isSnow = 1;

function makeSnowFlake() {
  const snowFlake = document.createElement("div");
  const delay = Math.random() * 10;
  const initialOpacity = Math.random() + 0.2;
  const duration = Math.random() * 20 + MIN_DURATION;
  const size = Math.random() * 4;

  snowFlake.classList.add("snowflake");
  snowFlake.style.left = `${Math.random() * window.screen.width}px`;
  snowFlake.style.animationDelay = `${delay}s`;
  snowFlake.style.opacity = initialOpacity - 0.1;
  snowFlake.style.width = `${4 + size}px`;
  snowFlake.style.height = `${4 + size}px`;
  snowFlake.style.animation = `fall ${duration}s linear`;

  body.appendChild(snowFlake);

  if (isSnow == 0) {
    setTimeout(() => {
      body.removeChild(snowFlake);
    }, 10);
  } else {
    setTimeout(() => {
      body.removeChild(snowFlake);
      makeSnowFlake();
    }, (duration + delay) * 1000);
  }
}

function renderSnow() {
  for (let i = 0; i < 50; i++) {
    setTimeout(makeSnowFlake, 500 * i);
  }
}

function Main() {
  const outerDivRef = useRef();
  const pageHeight = window.innerHeight;
  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
      // 화면 세로길이, 100vh와 같습니다.
      if (deltaY > 0) {
        // 스크롤 내릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          console.log("현재 1페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight,
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          console.log("현재 2페이지, down");
          window.scrollTo(0, document.body.scrollHeight);
        } else if (scrollTop >= pageHeight * 2 && scrollTop < pageHeight * 3) {
          window.scrollTo(0, document.body.scrollHeight);
        }
      } else {
        // 스크롤 올릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          console.log("현재 1페이지, up");
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          console.log("현재 2페이지, up");
          window.scrollTo(0, 0);
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        } else {
          // 현재 3페이지
          console.log("현재 3페이지, up");
          window.scrollTo(0, 0);
        }
      }
    };
    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener("wheel", wheelHandler);
    return () => {
      outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
    };
  }, []);
  function scroll() {
    outerDivRef.current.scrollTo({
      top: pageHeight * 3,
      left: 0,
      behavior: "smooth",
    });
  }
  function scrollUp() {
    outerDivRef.current.scrollTo({
      top: pageHeight,
      left: 0,
      behavior: "smooth",
    });
  }
  return (
    <Container>
      <SnowBtn
        onClick={() => {
          if (isSnow == 1) {
            isSnow = 0;
          } else if (isSnow == 0) {
            isSnow = 1;
          }
          console.log(isSnow);
        }}
      >
        Let It Snow!
      </SnowBtn>
      <Snow>{renderSnow()}</Snow>
      <Wrapper ref={outerDivRef}>
        <Intro>
          <Flip top>
            <div id="div0">
              <div id="div1">Welcome to</div>
              <span id="span1">code</span>.
              <span id="span2">
                Nyak<span id="span3">()</span>
              </span>
            </div>
          </Flip>
          <Bounce bottom>
            <hr />
            <br />
            <div id="div2">"Hello, World!"</div>
            <br />
            <div id="div3">
              NyaNyak의
              <br />
              발자국 저장소입니다
            </div>
            <hr />
          </Bounce>
        </Intro>
        <Fade bottom>
          <Profile>
            <Bg>
              <Pf>
                <Bounce bottom>
                  <Flip top>
                    <PfImage src={Prof} />
                    <div id="name">NyaNyak ◾ 최해솔</div>
                    <Status>
                      <div id="status">👣 Utopia Seeker</div>
                      <div id="status">🎮 Future Game Dev</div>
                      <div id="status">💜 WebㆍGameㆍDLㆍRL</div>
                    </Status>

                    <Button onClick={scroll}>See Projects</Button>
                  </Flip>
                </Bounce>
              </Pf>
              <BgImage src={Back} />
            </Bg>
          </Profile>
        </Fade>
        <Introduce>
          <ScrollButton onClick={scrollUp}>
            <Icon src={icon} />
          </ScrollButton>
          <Project>
            <Proj />
          </Project>
        </Introduce>
      </Wrapper>
    </Container>
  );
}
export default Main;
