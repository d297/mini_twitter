import React from "react";
import "./app-header.css";
import styled from "styled-components";

const DivHeader = styled.div`
  color: red;
  h1 {
    color: yellow;
    :hover {
      color: black;
    }
  }
`;
const AppHeader = () => {
  return (
    <div className="app-header d-flex">
      <h1>Kostenko Dmitriy</h1>
      <h2>5 записей из них понравилось 0</h2>
    </div>
  );
};

export default AppHeader;
