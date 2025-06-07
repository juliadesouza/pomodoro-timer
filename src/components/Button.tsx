// import styles from "./Button.module.css";

import { ButtonContainer, type ButtonVariant } from "./Button.styles";

interface ButtonProps {
  variant?: ButtonVariant;
}

// export function Button({ color = "primary" }: ButtonProps) {
//   return (
//     <button className={`${styles.button} ${styles[color]}`}>Click Me</button>
//   );
// }

export function Button({ variant = "primary" }: ButtonProps) {
  return <ButtonContainer variant={variant}>Click Me</ButtonContainer>;
}
