export interface OptionProps {
  label: string;
  id: string;
  name: string;
  onChange?: (event: Event) => string;
}

export interface PageContextInterface {
  activePage: string;
  displayPage: (page: string) => void;
}

type buttonSize = "small" | "large";
type buttonTypes = "button" | "submit" | "reset" | undefined;

export interface ButtonProps {
  type?: buttonTypes;
  size?: buttonSize;
  outlined?: boolean;
  icon?: any;
  label?: string;
  color?: string;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}
