import { RenderCardsWrapper } from './RenderCards.styles';
import { type RenderCardsProps } from './types';
import { Card } from '../../molecules';

const RenderCards = ({ cards }: RenderCardsProps) => {
  return (
    <RenderCardsWrapper>
      {cards?.map((card, index) => {
        const { id, name } = card;

        return <Card key={`${id}-${name}-${index}`} {...card} />;
      })}
    </RenderCardsWrapper>
  );
};

export default RenderCards;
