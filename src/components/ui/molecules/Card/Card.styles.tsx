import styled from 'styled-components';

export const CardWrapper = styled.article<{
  $name: string;
  $imgSrc?: string;
}>`
  background-color: ${({ $name }) => {
    switch ($name) {
      case 'cluedin':
        return '#c3abff';
      case 'oneResponse':
        return '#fff';
      case 'acronymSearch':
        return '#fed35b';
      case 'codesplanation':
        return '#1e1e1e';
      case 'portfolio':
        return '#44bba4';
      default:
        return '#fff';
    }
  }};
  position: relative;

  @media (max-width: 900px) {
    height: 300px;
  }
`;

export const CardInner = styled.div<{
  $name: string;
  $imgSrc: string;
}>`
  background-color: ${({ $name }) => {
    switch ($name) {
      case 'cluedin':
        return '#c3abff';
      case 'oneResponse':
        return '#fff';
      case 'acronymSearch':
        return '#fed35b';
      case 'codesplanation':
        return '#1e1e1e';
      case 'portfolio':
        return '#44bba4';
      default:
        return '#fff';
    }
  }};
  color: ${({ $name }) => ($name === 'codesplanation' ? '#fff' : '#000')};
  display: flex;
  gap: 4em;
  height: 100vh;
  padding: 2em;
  position: relative;
  width: 100%;
  will-change: transform;
`;

export const CardContent = styled.div`
  flex: 3;

  & p {
    @media (max-width: 900px) {
      display: none;
    }
  }
`;

export const CardImg = styled.div`
  aspect-ratio: 16 / 9;
  border-radius: 0.75em;
  flex: 1;
  overflow: hidden;

  img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;
