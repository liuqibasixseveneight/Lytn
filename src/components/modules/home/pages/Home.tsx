import { type HomeProps } from '../types';
import {
  HomeContentWrapper,
  HomeHeading,
  HomeInnerWrapper,
  HomeWrapper,
} from './Home.styles';
import heroImage from '../../../../assets/images/card-5.webp';
import { DecoratedButton } from '../../../ui';

const Home = ({}: HomeProps) => {
  return (
    <>
      <HomeWrapper $backgroundImage={heroImage}>
        <HomeInnerWrapper>
          <HomeContentWrapper>
            <HomeHeading>
              Creating unique
              <br />
              web experiences.
            </HomeHeading>

            <DecoratedButton
              labels={{
                buttonText: 'Get in touch',
              }}
              onClick={() => alert('Thanks for getting in touch!')}
            />
          </HomeContentWrapper>
        </HomeInnerWrapper>
      </HomeWrapper>
    </>
  );
};

export default Home;
