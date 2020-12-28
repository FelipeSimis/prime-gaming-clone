import styled from 'styled-components';

import { RiCloseLine } from 'react-icons/ri';

export const Container = styled.div`
  position: absolute;
  top: 50px;
  left: -20px;

  padding: 16px 24px;
  z-index: 10;

  max-width: 318px;

  color: var(--gray);
  background: var(--tooltip);
  box-shadow: 0 10px 14px 4px rgba(0, 0, 0, 0.34),
    0 6px 14px -6px rgba(0, 0, 0, 0.26), 0 4px 24px 0 rgba(0, 0, 0, 0.28) !important;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 8px;

    > h2 {
      font-size: 16px;
      font-weight: 600;
      color: var(--gray);
    }

    > button {
      padding: 2px;

      display: flex;
      align-items: center;
      justify-content: center;

      position: absolute;
      top: 5px;
      right: 5px;

      &:hover {
        background: var(--border-color);
      }
    }
  }

  p {
    font-size: 12px;
    color: var(--gray);
    line-height: 1.6;
  }
`;

export const CloseIcon = styled(RiCloseLine)`
  width: 20px;
  height: 20px;
  color: var(--lighter);
  cursor: pointer;
`;
