import React from 'react';
import styled from 'styled-components';
const GridWrapper = styled.div`
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  font-size: 25px;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`; 
export const About = () => (
  <GridWrapper>
    <h2>About Page</h2>
    <p>We provide quality products right at your doorstep at superfast speeds..</p>
    <p>We are the ASSK Team</p>
    <p>To Contact Us click the button Above</p>
  </GridWrapper>
)