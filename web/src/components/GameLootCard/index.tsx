import React from 'react';

import { Container, Image, Offer, ClaimInfo } from './styles';

interface Props {
  image: string;
  title: string;
  company: string;
  offer_end_time: string;
  position: number;
}

const GameLootCard: React.FC<Props> = ({
  image,
  title,
  company,
  offer_end_time,
  position,
  children,
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
        {children}
      </ClaimInfo>
    </Container>
  );
};

export default GameLootCard;
