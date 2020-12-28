import React from 'react';

import { useTooltip } from '../../hooks/tooltip';

import { CloseIcon, Container } from './styles';

const ToolTip: React.FC = () => {
  const { setIsShowingTip } = useTooltip();

  return (
    <Container>
      <div className="header">
        <h2>New name. More great benefits.</h2>

        <button type="button">
          <CloseIcon onClick={() => setIsShowingTip(false)} />
        </button>
      </div>

      <p>
        Prime Gaming continues to include a free monthly Twitch channel
        subscription, tons of free content in your favorite games, 5+ free PC
        games every month, and more with your Amazon Prime membership.
      </p>
    </Container>
  );
};

export default ToolTip;
