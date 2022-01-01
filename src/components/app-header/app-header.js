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
const AppHeader = ({ liked, allPosts }) => {
  return (
    <div className="app-header d-flex">
      <h1>Kostenko Dmitriy</h1>
      <h2>
        {allPosts} записей из них понравилось {liked}
      </h2>
    </div>
  );
};

export default AppHeader;
