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

  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;

  display: flex;
  justify-content: center;
  align-items: center;

  &.default {
    background: #e74c3c;
    color: #fff;
  }

  &.outline {
    border: 1px solid #f05645;
    background-color: white;
    color: #e74c3c;
  }

  transition: 0.3s;

  &:hover {
    background-color: #f05645;
    color: white;
  }
`;
