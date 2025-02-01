import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { type AboutProps } from '../types';
import {
  AboutHeading,
  AboutInnerWrapper,
  AboutSubHeading,
  AboutWrapper,
} from './About.styles';

const About = ({}: AboutProps) => {
  const boxRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const animation = gsap.to(boxRef.current, {
      paused: true,
      borderRadius: '100%',
    });

    const handleMouseEnter = () => animation.play();
    const handleMouseLeave = () => animation.reverse();

    boxRef.current?.addEventListener('mouseenter', handleMouseEnter);
    boxRef.current?.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      boxRef.current?.removeEventListener('mouseenter', handleMouseEnter);
      boxRef.current?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      <AboutWrapper>
        <AboutInnerWrapper>
          <div
            style={{
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <AboutHeading>Hi, I'm Joshua!</AboutHeading>
            <AboutSubHeading>
              Frontend developer based in the UK
            </AboutSubHeading>

            <div
              ref={boxRef}
              style={{
                content: '',
                background: 'red',
                height: '200px',
                width: '200px',
              }}
            />
          </div>
        </AboutInnerWrapper>
      </AboutWrapper>
    </>
  );
};

export default About;
