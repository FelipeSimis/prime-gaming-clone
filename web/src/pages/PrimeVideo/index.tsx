import React from 'react';

import { useTooltip } from '../../hooks/tooltip';

import {
  Container,
  Wrapper,
  Header,
  QuestionIcon,
  MovieSection,
  Row,
  WrapperCarousel,
  Carousel,
  Image,
} from './styles';

import PrimeGaming from '../../assets/prime-gaming.svg';
import { TvImage, MovieImage } from '../../assets/Images';

import { Footer, ToolTip } from '../../components';

const PrimeVideo: React.FC = () => {
  const { isShowingTip, handleTooltip } = useTooltip();

  return (
    <Container>
      <Wrapper>
        <Header>
          <img src={PrimeGaming} alt="Prime Gaming" />

          <button type="button" onClick={handleTooltip}>
            <QuestionIcon />
          </button>

          {isShowingTip && <ToolTip />}
        </Header>

        <MovieSection>
          <div className="wrapper-info">
            <h1>Included with Your Prime Gaming Membership</h1>
            <span>Your membership includes benefits from Amazon Prime</span>
          </div>

          <Row>
            <div className="recommendation-info">
              <h2>Prime Video Recommended TV</h2>
              <span>Popular TV for Prime Gaming members</span>
            </div>

            <div className="link">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.primevideo.com/storefront/tv/ref=atv_nb_sf_tv"
              >
                Browse all TV included with Prime
              </a>
            </div>
          </Row>

          <WrapperCarousel>
            <Carousel>
              {TvImage.map(image => (
                <div key={image.id}>
                  <Image src={image.src} />
                </div>
              ))}
            </Carousel>
          </WrapperCarousel>

          <Row>
            <div className="recommendation-info">
              <h2>Prime Video Recommended Movies</h2>
              <span>Popular movies for Prime Gaming members</span>
            </div>

            <div className="link">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.primevideo.com/storefront/movie/ref=atv_nb_sf_mv"
              >
                Browse all movies included with Prime
              </a>
            </div>
          </Row>

          <WrapperCarousel>
            <Carousel>
              {MovieImage.map(image => (
                <div key={image.id}>
                  <Image src={image.src} />
                </div>
              ))}
            </Carousel>
          </WrapperCarousel>
        </MovieSection>

        <Footer />
      </Wrapper>
    </Container>
  );
};

export default PrimeVideo;
