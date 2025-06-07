// import styled, { css } from "styled-components";
import styled from "styled-components";
export type ButtonVariant = "primary" | "secondary" | "danger" | "success";

interface ButtonProps {
  variant: ButtonVariant;
}

// const buttonVariants = {
//   primary: "purple",
//   secondary: "orange",
//   danger: "red",
//   success: "green",
// };

export const ButtonContainer = styled.button<ButtonProps>`
  width: 100px;
  height: 40px;
  border-radius: 4px;
  border: 0;
  margin: 8px;
  color: white;
  background-color: ${(props) => props.theme["green-500"]};
`;

// export const ButtonContainer = styled.button<ButtonProps>`
//   width: 100px;
//   height: 40px;
//   ${(props) =>
//     css`
//       background-color: ${buttonVariants[props.variant]};
//     `};
// `;
