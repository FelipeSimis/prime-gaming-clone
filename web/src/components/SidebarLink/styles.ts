import styled from 'styled-components';

export const Container = styled.div`
  > a {
    width: 100%;
    height: 60px;

    display: flex;
    align-items: center;

    border-top: 2px solid var(--border-color);

    padding: 16px 16px 16px 24px;
    transition: background 0.2s;

    text-decoration: none;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
    color: var(--lighter);

    > img {
      width: 18px;
      height: 16px;
      fill: var(--lighter);
      margin-right: 8px;
    }

    &:hover,
    &:focus {
      background: linear-gradient(
        -134deg,
        rgba(0, 0, 0, 0.05),
        rgba(0, 0, 0, 0.05) 97%
      ) !important;
      border-left: 8px solid var(--blue-dark);
      padding-left: 16px;
    }

    &:hover {
      border-left: 8px solid var(--blue-dark) !important;
    }

    &.sidebar-link-active {
      border-left: 8px solid var(--blue);
      padding-left: 16px;
    }
  }
`;
