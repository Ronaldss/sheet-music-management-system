import { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

export default function ButtonMusic({
  children,
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <Container>{children}</Container>;
}
