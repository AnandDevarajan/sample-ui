import React from 'react';
import styled from 'styled-components';
const GridWrapper = styled.div`
  height:500px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  font-size:25px;
  color:white;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`;

export const Home = (props) => (
  <GridWrapper>
    <p>Tired of Cooking at Home?
    Or Want to Watch a Movie at your Leisure and dont want to cook?
    </p>
    <p>This is the Exact Place for you explore and find the product of your choice</p>
  </GridWrapper>
)