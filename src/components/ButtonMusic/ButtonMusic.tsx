import { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

export default function ButtonMusic({
  children,
  className = "default",
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <Container className={className}>{children}</Container>;
}
