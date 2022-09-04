export interface OptionProps {
  label: string;
  id: string;
  name: string;
  value: string;
  onStateChange: Function;
}

export interface PageContextInterface {
  activePage: string;
  displayPage: (page: string) => void;
}

export interface ModalContextInterface {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

type buttonTypes = "button" | "submit" | "reset" | undefined;
type btnVariant =
  | "primary"
  | "text"
  | "icon"
  | "textIcon"
  | "iconBg"
  | "danger"
  | "disabled";

export interface ButtonProps {
  variant?: btnVariant;
  type?: buttonTypes;
  icon?: any;
  label?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export interface DropdownProps {
  title: string;
  labels: string[];
  legend: string;
}

export interface SelectableProps {
  legend: string;
  labels: string[];
  optionName: string;
}

export interface TextareaProps {
  id?: string;
  label?: string;
  placeholder?: string;
}
