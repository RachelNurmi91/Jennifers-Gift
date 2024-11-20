import { ReactNode } from "react";
import { SelectChangeEvent } from '@mui/material'

export interface BannerTypes {
  title: string,
}

export interface ButtonTypes {
  text: string;
  action?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export interface ImageTypes {
  src: string;
}

export interface CardTypes {
  image: ImageTypes;
  title: string;
  desc?: ReactNode;
}

export interface CheckboxTypes {
  text: string;
  id: string;
  desc?: string;
  onSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ContainerTypes {
  title: string,
  component: ReactNode;
}

export interface InputTypes {
  label: string;
  id: string;
  placeholder: string;
  action: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface SelectOptionsTypes {
  value: string;
  label: string;
}

export interface SelectTypes {
  label: string;
  id: string;
  action: (e: SelectChangeEvent<string>) => void;
  options: SelectOptionsTypes[];
  value: string;
  desc?: string;
}
