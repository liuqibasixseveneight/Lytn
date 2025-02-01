import styled from 'styled-components';

export const HomeWrapper = styled.section<{
  $backgroundImage: string;
}>`
  background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.4),
      rgba(0, 0, 0, 0.6)
    ),
    url(${({ $backgroundImage }) => $backgroundImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  padding: 0;
  position: relative;
  width: 100vw;
`;

export const HomeInnerWrapper = styled.div`
  align-items: center;
  backdrop-filter: blur(2rem);
  display: flex;
  height: 100%;
  justify-content: center;
  overflow: hidden;
  padding: 0 6em;
  width: 100%;
`;

export const HomeContentWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  padding: 8rem 0;
  width: 100%;
`;

export const HomeHeading = styled.h1`
  color: #fff;
  font-size: 160px;
  font-weight: bold;
  line-height: 1;
  user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;
