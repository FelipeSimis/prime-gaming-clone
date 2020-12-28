import styled, { css } from 'styled-components';

interface ContainerProps {
  xPosition: number;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  background: var(--loot-box);
  border-radius: 6px;

  min-width: 180px;
  overflow: hidden;
  transition: transform 0.4s ease;

  ${props =>
    props.xPosition >= 0
      ? css`
          transform: translateX(${`${props.xPosition}px`});
        `
      : css`
          transform: translateX(${`${props.xPosition}px`});
        `};

  margin: 0 8px;

  @media (min-width: 350px) {
    min-width: 235px;
  }

  @media (min-width: 1100px) {
    max-width: none;
    transform: none;
    margin: 0;
  }
`;

export const Image = styled.img`
  width: 100%;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Offer = styled.div`
  height: 110px;
  padding: 6px 16px 16px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > h5 {
    font-size: 14px;
    color: var(--lighter);
    line-height: 1.5;
  }

  > small {
    font-size: 11px;
    color: var(--company);
  }
`;

export const ClaimInfo = styled.div`
  padding: 12px 16px;
  border-top: 1px solid var(--bg-color);

  display: flex;
  align-items: center;
  justify-content: space-between;

  > p {
    max-width: 50%;
    font-size: 12px;
    color: var(--gray);
  }

  > a,
  button {
    padding: 4px 6px;
    border-radius: 4px;
    font-size: 12px;
    text-decoration: none;
    background: var(--blue);

    transition: background 0.2s;

    &:hover {
      background: var(--blue-hover);
    }
  }

  > div {
    display: flex;
    align-items: center;

    span {
      margin-right: 12px;
    }
  }

  button.claimed {
    display: flex;
    align-items: center;
    justify-content: center;

    background: var(--green);

    &:hover {
      background: var(--green);
    }
  }

  .claimed-label {
    font-size: 12px;
    color: var(--green);
  }
`;
