import Styled from 'styled-components';

interface ButtonModel {
  buttonType?: string;
  width?: string;
}

export const Button = Styled.button<ButtonModel>`
  width: ${(props: ButtonModel) => props.width || "100%"};
  height: 40px;
  padding: 0px 24px;
  font-weight: 800;
  border-radius: 8px;
  font-size: 12px;
  background: ${(props: ButtonModel) => props.buttonType === "primary" ? "rgb(255, 212, 28)": "white"};
  cursor: pointer;
  border: 1px solid rgb(255, 212, 28);
  outline:none;
`;