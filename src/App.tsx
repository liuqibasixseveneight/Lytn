import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

import { AppWrapper } from './App.styles';
import heroImage from './assets/images/hero.webp';
import { cards } from './cards';
import { Card } from './components/ui';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function App() {
  const containerRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>('.card');

      ScrollTrigger.create({
        trigger: cards[0],
        start: 'top 35%',
        endTrigger: cards[cards.length - 1],
        end: 'top 30%',
        pin: '.intro',
        pinSpacing: false,
      });

      cards.forEach((card, index) => {
        const isLastCard = index === cards.length - 1;
        const cardInner = card.querySelector('.card-inner');

        if (!isLastCard) {
          ScrollTrigger.create({
            trigger: card,
            start: 'top 35%',
            endTrigger: '.outro',
            end: 'top 65%',
            pin: true,
            pinSpacing: false,
          });

          gsap.to(cardInner, {
            y: `-${(cards.length - index) * 14}vh`,
            ease: 'none',
            scrollTrigger: {
              trigger: card,
              start: 'top 35%',
              endTrigger: '.outro',
              end: 'top 65%',
              scrub: true,
            },
          });
        }
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { scope: containerRef }
  );

  return (
    <>
      <AppWrapper className='app' ref={containerRef}>
        <section className='hero'>
          <img src={heroImage} alt='Hero' />
        </section>

        <section className='intro'>
          <h1>Creating unique web experiences.</h1>
        </section>

        <section className='cards'>
          {cards?.map((card, index) => {
            const { id, name } = card;
            return <Card key={`${id}-${name}-${index}`} {...card} />;
          })}
        </section>
        <section className='outro'>
          <h1>Let's build something great together.</h1>
        </section>
      </AppWrapper>
    </>
  );
}

export default App;
