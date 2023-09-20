import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  > nav {
    list-style: none;
    display: flex;
    gap: 20px;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  background-color: red;
  font-weight: 500;
  &.active {
    color: white;
    background-color: orangered;
  }
  /* &.hover {
    border-bottom: 2px solid red;
  }
  &.focus {
    border-bottom: 2px solid red;
  } */
`;
