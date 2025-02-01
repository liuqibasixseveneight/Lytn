import { CardContent, CardImg, CardInner, CardWrapper } from './Card.styles';
import { type CardProps } from './types';

const Card = ({
  id,
  name,
  labels: { title, subtitle },
  img: { src, alt },
}: CardProps) => {
  return (
    <CardWrapper className='card' id={`card-${id + 1}`} $name={name}>
      <CardInner className='card-inner' $name={name} $imgSrc={src}>
        <CardContent className='card-content'>
          <h1 className='heading'>{title}</h1>
          <p>{subtitle}</p>
        </CardContent>

        <CardImg className='card-img'>
          <img src={src} alt={alt} />
        </CardImg>
      </CardInner>
    </CardWrapper>
  );
};

export default Card;
