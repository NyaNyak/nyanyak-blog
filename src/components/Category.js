import styled from "styled-components";
import { useState } from "react";
import "../font/font.css";

const Container = styled.div`
  background-color: #393939;
  height: 100vh;
  width: 220px;
  display: flex;
  position: fixed;
  flex-direction: column;
  top: 6vh;
  @media (max-width: 500px) {
    top: 5vh;
  }
`;

const PBt = styled.button`
  padding: 10px 0px 10px 10px;
  text-align: left;
  letter-spacing: 1px;
  width: 220px;
  height: 60px;
  border: none;
  font-family: "Coding";
  color: #d5d5d5;
  font-size: 18px;
  background-color: #393939;
  &:hover {
    cursor: pointer;
    background-color: #4c4c4c;
  }
`;

const CBt = styled.button`
  padding: 0px 0px 0px 30px;
  text-align: left;
  letter-spacing: 1px;
  width: 220px;
  height: 40px;
  border: none;
  font-family: "Coding";
  color: #d5d5d5;
  font-size: 18px;
  background-color: #393939;
  &:hover {
    cursor: pointer;
    background-color: #4c4c4c;
  }
`;

function Category() {
  const [pbtVisible, setPbtVisible] = useState(false);
  const [webVisible, setWebVisible] = useState(false);
  const [pyVisible, setPyVisible] = useState(false);
  const [alVisible, setAlVisible] = useState(false);
  const [dlVisible, setDlVisible] = useState(false);
  const [pjVisible, setPjVisible] = useState(false);
  const [unVisible, setUnVisible] = useState(false);
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
            setWebVisible(!webVisible);
          }}
        >
          {webVisible ? "⌄ Web" : "> Web"}
        </CBt>
      )}
      {pbtVisible && (
        <CBt
          onClick={() => {
            setPyVisible(!pyVisible);
          }}
        >
          {pyVisible ? "⌄ Python" : "> Python"}
        </CBt>
      )}
      {pbtVisible && (
        <CBt
          onClick={() => {
            setAlVisible(!alVisible);
          }}
        >
          {alVisible ? "⌄ Algorithm" : "> Algorithm"}
        </CBt>
      )}
      {pbtVisible && (
        <CBt
          onClick={() => {
            setDlVisible(!dlVisible);
          }}
        >
          {dlVisible ? "⌄ DeepLearning" : "> DeepLearning"}
        </CBt>
      )}
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
            setUnVisible(!unVisible);
          }}
        >
          {unVisible ? "⌄ Unity" : "> Unity"}
        </CBt>
      )}
    </Container>
  );
}
export default Category;
