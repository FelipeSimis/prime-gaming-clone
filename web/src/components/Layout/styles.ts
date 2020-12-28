import styled from 'styled-components';

import { RiGlobalLine } from 'react-icons/ri';
import { BsCaretDownFill } from 'react-icons/bs';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  @media (min-width: 1100px) {
    display: grid;
    grid-template-columns: 256px auto;
    grid-template-areas: 'sidebar content';
  }
`;

export const LanguageButton = styled.button`
  display: flex;
  align-items: center;

  height: 23px;
  z-index: 1000;

  padding: 4px 8px;
  transition: background 0.2s ease-in-out;

  position: absolute;
  top: 30px;
  right: 30px;

  &:hover {
    background: var(--language-hover);
  }
`;

export const GlobalIcon = styled(RiGlobalLine)`
  width: 12px;
  height: 12px;
  margin-right: 3px;
`;

export const ArrowDownIcon = styled(BsCaretDownFill)`
  width: 12px;
  height: 12px;
  margin-left: 3px;
`;

export const SelectedLanguage = styled.span`
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;

  border-radius: 2px;
`;

export const LanguagesContainer = styled.div`
  position: absolute;
  top: 60px;
  right: 5px;
  z-index: 1000;

  display: flex;
  flex-direction: column;

  width: 150px;
  padding: 8px;

  background: var(--sidebar);
  border-radius: 6px;
`;

export const Language = styled.button`
  display: flex;
  align-items: center;

  padding: 6px 4px;
  border-radius: 4px;
  transition: background 0.2s ease-in-out;

  font-size: 12px;
  color: #fff;
  border-radius: 2px;

  &.active {
    background: var(--bg-color);
  }

  &:hover {
    background: var(--bg-color);
  }
`;
