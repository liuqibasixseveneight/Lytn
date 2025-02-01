import styled from 'styled-components';

export const AboutWrapper = styled.section`
  background: pink;
  height: 100vh;
  padding: 0;
  position: relative;
  width: 100vw;
`;

export const AboutInnerWrapper = styled.div`
  align-items: center;
  /* backdrop-filter: blur(2rem); */
  display: flex;
  height: 100%;
  justify-content: center;
  /* overflow: hidden; */
  padding: 0 6em;
  width: 100%;
`;

export const AboutHeading = styled.h2`
  color: #fff;
  font-size: 160px;
  font-weight: bold;
  line-height: 1;
  margin-bottom: 4rem;
  user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;

export const AboutSubHeading = styled.div`
  color: #fff;
  font-size: 80px;
  font-weight: bold;
  line-height: 1;
  user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;
