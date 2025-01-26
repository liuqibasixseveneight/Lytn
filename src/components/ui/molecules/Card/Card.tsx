import { type CardProps } from './types';

const Card = ({
  id,
  labels: { title, subtitle },
  img: { src, alt },
}: CardProps) => {
  return (
    <div className='card' id={`card-${id + 1}`}>
      <div className='card-inner'>
        <div className='card-content'>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
        <div className='card-img'>
          <img src={src} alt={alt} />
        </div>
      </div>
    </div>
  );
};

export default Card;
