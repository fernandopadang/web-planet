import { Button } from './style';

interface ButtonModel {
  buttonType?: "primary" | "default";
  children: React.ReactNode;
  width?: string;
}

export default (props: ButtonModel) => {
  const { buttonType, children, width } = props;
  const propsButton = {
    buttonType,
    width
  }
  return (
    <Button {...propsButton}>{children}</Button>
  )
}