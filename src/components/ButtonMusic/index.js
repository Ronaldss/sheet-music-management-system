import styled from "styled-components";

const ButtonMusic = styled.button`
  display:flex;
  position:relative;
  overflow: hidden;
  cursor:pointer;

  height: 33px;
  width: 70%;
  border-radius: 10px;
  background: #E74C3C;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: 1s;

  &::before {
    content: '';
    position: absolute;
    opacity: 1;
    width: 100%;
    height:100%;
    background-color: #f05645;
    transform-origin: bottom left;
    transform: translateX(100%) scale(1.5) skew(-30deg);
    transition: transform 200ms linear;
  }

  &::after{
    content: "${(props) => props.children}";
    position: absolute;
    color: #fff;
  } 
  
  &:hover::before{
    transform: translateX(-30%) scale(1.5) skew(-30deg);
  }
`;
export default ButtonMusic;
