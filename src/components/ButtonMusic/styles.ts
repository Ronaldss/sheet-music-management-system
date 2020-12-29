import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  height: 55px;
  width: 100%;
  border: none;
  border-radius: 8px;
  background: #e74c3c;

  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: 1s;

  &::before {
    content: "";
    position: absolute;
    opacity: 1;
    width: 100%;
    height: 100%;
    background-color: #f05645;
    transform-origin: bottom left;
    transform: translateX(100%) scale(1.5) skew(-30deg);
    transition: transform 200ms linear;
  }

  &::after {
    position: absolute;
    color: #fff;
  }

  &:hover::before {
    transform: translateX(-30%) scale(1.5) skew(-30deg);
  }
`;
