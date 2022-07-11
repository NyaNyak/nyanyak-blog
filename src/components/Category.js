import styled from "styled-components";
import { useState } from "react";
import "../font/font.css";

const Container = styled.div`
  background-color: #393939;
  height: 100vh;
  width: 28vh;
  display: flex;
  position: absolute;
  flex-direction: column;
  top: 6vh;
  z-index: 7;
  @media (max-width: 850px) {
    top: 5vh;
    z-index: 20;
  }
`;

const PBt = styled.button`
  padding: 10px 0px 10px 2vh;
  text-align: left;
  letter-spacing: 2px;
  width: 28vh;
  height: 8vh;
  border: none;
  font-family: "Coding";
  color: #d5d5d5;
  font-size: 2.3vh;
  background-color: #393939;
  &:hover {
    cursor: pointer;
    background-color: #4c4c4c;
  }
`;

const CBt = styled.button`
  padding: 0px 0px 0px 4vh;
  text-align: left;
  letter-spacing: 2px;
  width: 28vh;
  height: 6.5vh;
  border: none;
  font-family: "Coding";
  color: #d5d5d5;
  font-size: 2vh;
  background-color: #393939;
  &:hover {
    cursor: pointer;
    background-color: #4c4c4c;
  }
`;

const LBt = styled.button`
  padding: 0px 0px 0px 5.5vh;
  text-align: left;
  letter-spacing: 1px;
  width: 28vh;
  height: 6vh;
  border: none;
  font-family: "Coding";
  color: #d5d5d5;
  font-size: 1.8vh;
  background-color: #393939;
  &:hover {
    cursor: pointer;
    background-color: #4c4c4c;
  }
`;

function Category() {
  const [pbtVisible, setPbtVisible] = useState(false);
  const [stVisible, setStVisible] = useState(false);
  const [lfVisible, setLfVisible] = useState(false);
  const [gmVisible, setGmVisible] = useState(false);
  const [hbVisible, setHbVisible] = useState(false);
  const [pjVisible, setPjVisible] = useState(false);

  return (
    <Container>
      <PBt
        onClick={() => {
          setPbtVisible(!pbtVisible);
        }}
      >
        {pbtVisible ? "⌄ Category" : "> Category"}
      </PBt>
      {pbtVisible && (
        <CBt
          onClick={() => {
            setStVisible(!stVisible);
          }}
        >
          {stVisible ? "⌄ Study" : "> Study"}
        </CBt>
      )}
      {pbtVisible && stVisible && <LBt>📄 Web</LBt>}
      {pbtVisible && stVisible && <LBt>📄 Python</LBt>}
      {pbtVisible && stVisible && <LBt>📄 Algorithm</LBt>}
      {pbtVisible && stVisible && <LBt>📄 DeepLearning</LBt>}
      {pbtVisible && stVisible && <LBt>📄 Unity</LBt>}
      {pbtVisible && (
        <CBt
          onClick={() => {
            setPjVisible(!pjVisible);
          }}
        >
          {pjVisible ? "⌄ Project" : "> Project"}
        </CBt>
      )}
      {pbtVisible && (
        <CBt
          onClick={() => {
            setLfVisible(!lfVisible);
          }}
        >
          {lfVisible ? "⌄ Life" : "> Life"}
        </CBt>
      )}
      {pbtVisible && (
        <CBt
          onClick={() => {
            setGmVisible(!gmVisible);
          }}
        >
          {gmVisible ? "⌄ Game" : "> Game"}
        </CBt>
      )}
      {pbtVisible && gmVisible && <LBt>🍁 MapleStory</LBt>}
      {pbtVisible && (
        <CBt
          onClick={() => {
            setHbVisible(!hbVisible);
          }}
        >
          {hbVisible ? "⌄ Hobby" : "> Hobby"}
        </CBt>
      )}
      {pbtVisible && hbVisible && <LBt>🖼️ Drawing</LBt>}
    </Container>
  );
}
export default Category;
