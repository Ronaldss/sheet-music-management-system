import * as S from "./styles";

export default function TitleMusic(props: any) {
  return (
    <>
      <S.Title>{props.children}</S.Title>
      <S.SubTitle>Testando</S.SubTitle>
    </>
  );
}
