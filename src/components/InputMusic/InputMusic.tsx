import { InputHTMLAttributes } from "react";
import { Container } from "./styles";

export default function InputMusic(
  props: InputHTMLAttributes<HTMLInputElement>
) {
  return <Container {...props} />;
}
