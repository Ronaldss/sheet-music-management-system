import styled from "styled-components";
import { DropzoneRootProps } from "react-dropzone";

export const Container = styled.div`
  margin: 0 auto;
  width: 80%;
`;

export const Title = styled.h1`
  margin: 40px 0;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
`;

const getColor = (props: DropzoneRootProps) => {
  if (props.isDragAccept) {
    return "#00e676";
  }
  if (props.isDragReject) {
    return "#ff1744";
  }
  if (props.isDragActive) {
    return "#2196f3";
  }
  return "#eeeeee";
};

export const DropzoneContainer = styled.div`
  height: 200px;
  padding: 20px;
  margin: 10px 0 30px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-width: 2px;
  border-radius: 8px;
  border-color: ${(props) => getColor(props)};
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border 0.24s ease-in-out;
`;

export const Subtitle = styled.h4`
  font-size: 1.3rem;
  font-weight: bold;
`;

export const List = styled.ul`
  margin: 20px 0 30px;
  list-style: none;
`;

export const ListItem = styled.li`
  background-color: aquamarine;
  padding: 20px;
  border: none;
  border-radius: 8px;
  margin-top: 10px;
  margin-bottom: 0;
`;

export const Section = styled.section`
  width: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    width: 100%;
  }
  div:first-child {
    margin-right: 20px;

    @media (max-width: 550px) {
      margin-right: 0;
      margin-bottom: 20px;
    }
  }

  @media (max-width: 550px) {
    width: 100%;
    flex-direction: column;
  }
`;
