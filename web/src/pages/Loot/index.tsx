import React, { memo, useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

import api from '../../services/api';

import { useTooltip } from '../../hooks/tooltip';

import {
  Container,
  Wrapper,
  Banner,
  Row,
  QuestionIcon,
  InfoContainer,
  GameSection,
  Grid,
  SlideButton,
  CheckIcon,
} from './styles';

import PrimeGaming from '../../assets/prime-gaming.svg';

import { InGameLoot, GameLoot } from './@types';

import { Footer, GameLootCard, LootCard, ToolTip } from '../../components';

const Loot: React.FC = () => {
  const [inGameLoot, setInGameLoot] = useState<InGameLoot[]>([]);
  const [gameLoot, setGameLoot] = useState<GameLoot[]>([]);

  const [inGameSlideXPosition, setInGameSlideXPosition] = useState(0);
  const [gameSlideXPosition, setGameSlideXPosition] = useState(0);

  const { isShowingTip, handleTooltip } = useTooltip();

  useEffect(() => {
    Promise.all([
      api.get('/loot').then(response => {
        setInGameLoot(response.data);
      }),
      api.get('/games').then(response => {
        setGameLoot(response.data);
      }),
    ]);
  }, []);

  const handleClaimItem = useCallback(async _id => {
    await api.patch(`/games/${_id}`);

    setGameLoot(state =>
      state.map(game => {
        if (game._id === _id) {
          return {
            ...game,
            isClaimed: true,
          };
        }

        return game;
      })
    );
  }, []);

  const handleInGameSlideLeft = useCallback(() => {
    if (inGameSlideXPosition === 0) {
      return;
    }

    setInGameSlideXPosition(inGameSlideXPosition + 246);
  }, [inGameSlideXPosition]);

  const handleInGameSlideRight = useCallback(() => {
    if (inGameSlideXPosition <= -Math.abs(inGameLoot.length * 246 - 738)) {
      return;
    }

    setInGameSlideXPosition(inGameSlideXPosition - 246);
  }, [inGameSlideXPosition, inGameLoot]);

  const handleGameSlideLeft = useCallback(() => {
    if (gameSlideXPosition === 0) {
      return;
    }

    setGameSlideXPosition(gameSlideXPosition + 246);
  }, [gameSlideXPosition]);

  const handleGameSlideRight = useCallback(() => {
    if (gameSlideXPosition <= -Math.abs(gameLoot.length * 246 - 738)) {
      return;
    }

    setGameSlideXPosition(gameSlideXPosition - 246);
  }, [gameSlideXPosition, gameLoot]);

  return (
    <Container>
      <Wrapper>
        <Banner>
          <Row>
            <img src={PrimeGaming} alt="Prime Gaming" />

            <button type="button" onClick={handleTooltip}>
              <QuestionIcon />
            </button>

            {isShowingTip && <ToolTip />}
          </Row>

          <InfoContainer>
            <h2 className="title">Battlefield 3 for PC included with Prime</h2>

            <button type="button">
              <Link to="/">Learn more</Link>
            </button>
          </InfoContainer>
        </Banner>

        <GameSection>
          <div className="wrapper-title">
            <h2>In-Game Loot and More</h2>
          </div>

          <Grid>
            {inGameLoot.map(item => (
              <LootCard
                key={item._id}
                image={`http://localhost:3333/uploads/${item.image}`}
                title={item.title}
                company={item.company}
                offer_end_time={`Offer ends in ${item.offerEndTime}`}
                hasCode={item.hasCode}
                position={inGameSlideXPosition}
              />
            ))}
            <SlideButton type="button" toLeft onClick={handleInGameSlideLeft}>
              <FiArrowLeft />
            </SlideButton>

            <SlideButton type="button" toRight onClick={handleInGameSlideRight}>
              <FiArrowRight />
            </SlideButton>
          </Grid>
        </GameSection>

        <GameSection>
          <div className="wrapper-title">
            <h2>Games with Prime</h2>
          </div>

          <Grid>
            {gameLoot.map(item => (
              <GameLootCard
                key={item._id}
                image={`http://localhost:3333/uploads/${item.image}`}
                title={item.title}
                company={item.company}
                offer_end_time={`Offer ends in ${item.offerEndTime}`}
                position={gameSlideXPosition}
              >
                {!item.isClaimed ? (
                  <button
                    type="button"
                    onClick={() => handleClaimItem(item._id)}
                  >
                    Claim
                  </button>
                ) : (
                  <div>
                    <span className="claimed-label">Claimed</span>
                    <button type="button" className="claimed">
                      <CheckIcon />
                    </button>
                  </div>
                )}
              </GameLootCard>
            ))}
            <SlideButton type="button" toLeft onClick={handleGameSlideLeft}>
              <FiArrowLeft />
            </SlideButton>

            <SlideButton type="button" toRight onClick={handleGameSlideRight}>
              <FiArrowRight />
            </SlideButton>
          </Grid>
        </GameSection>

        <Footer />
      </Wrapper>
    </Container>
  );
};

export default memo(Loot);
