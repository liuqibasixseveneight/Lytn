import styled from 'styled-components';

export const DecoratedButtonWrapper = styled.div`
  align-items: stretch;
  display: flex;
`;

export const StyledButton = styled.button`
  background: #fff;
  border: none;
  border-radius: 100vmax;
  color: #000;
  cursor: pointer;
  font-size: 60px;
  line-height: 1;
  overflow: hidden;
  padding: 2rem 4rem;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;

  &:hover {
    overflow: visible;
  }
`;

export const IconWrapper = styled.div`
  content: '';
  background: #fff;
  border-radius: 100vmax;
  height: calc(60px + 4rem);
  opacity: 0;
  position: absolute;
  left: -10%;
  top: 50%;
  transform: translateY(-50%);
  width: calc(60px + 4rem);
`;
