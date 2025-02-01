import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import {
  DecoratedButtonWrapper,
  IconWrapper,
  StyledButton,
} from './DecoratedButton.styles';
import { type DecoratedButtonProps } from './types';

const DecoratedButton = ({
  labels: { buttonText },
  onClick,
}: DecoratedButtonProps) => {
  const buttonWrapperRef = useRef<HTMLDivElement | null>(null);
  const iconWrapperRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const animation = gsap.to(iconWrapperRef.current, {
      paused: true,
      height: '250px',
      background: 'red',
    });

    const handleMouseEnter = () => animation.play();
    const handleMouseLeave = () => animation.reverse();

    buttonWrapperRef.current?.addEventListener('mouseenter', handleMouseEnter);
    buttonWrapperRef.current?.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      buttonWrapperRef.current?.removeEventListener(
        'mouseenter',
        handleMouseEnter
      );
      buttonWrapperRef.current?.removeEventListener(
        'mouseleave',
        handleMouseLeave
      );
    };
  }, []);

  return (
    <>
      <DecoratedButtonWrapper ref={buttonWrapperRef} onClick={onClick}>
        <StyledButton>
          {buttonText}

          <IconWrapper ref={iconWrapperRef} />
        </StyledButton>
      </DecoratedButtonWrapper>
    </>
  );
};

export default DecoratedButton;
