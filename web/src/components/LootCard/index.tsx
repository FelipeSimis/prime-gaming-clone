import React, { memo } from 'react';

import { Container, Image, Offer, ClaimInfo } from './styles';

interface Props {
  image: string;
  title: string;
  company: string;
  offer_end_time: string;
  hasCode: boolean;
  position: number;
}

const LootCard: React.FC<Props> = ({
  image,
  title,
  company,
  offer_end_time,
  hasCode,
  position,
}) => {
  return (
    <Container xPosition={position}>
      <div className="image">
        <Image src={image} alt="Game image" />
      </div>

      <Offer>
        <h5>{title}</h5>
        <small>{company}</small>
      </Offer>

      <ClaimInfo>
        <p>{offer_end_time}</p>

        {!hasCode ? (
          <a target="_blank" rel="noopener noreferrer" href="/">
            Learn more
          </a>
        ) : (
          <>
            <button type="button">Get code</button>
          </>
        )}
      </ClaimInfo>
    </Container>
  );
};

export default memo(LootCard);
