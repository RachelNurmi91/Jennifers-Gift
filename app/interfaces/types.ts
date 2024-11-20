import { ReactNode } from "react";
import { FormEvent, ChangeEvent } from 'react';
import { SelectChangeEvent } from "@mui/material";

export interface SelectionTypes {
  attendAsGolfer: boolean;
  attendAsTeam: boolean;
  attendDinner: boolean;
  sponsorHole: boolean;
  sponsorDoubleHole: boolean;
  sponsorBeverage: boolean;
  sponsorLunch: boolean;
  sponsorDinner: boolean;
}

export interface FormTypes {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  selection: SelectionTypes;
  paymentType: string;
}

export interface ChildrenTypes {
  children: ReactNode; // Define the type of children
}

export interface ResourceTypes {
  _id: string;
  name: string;
  url: string;
  summary: string;
}

export interface RegistrationFormTypes {
  onRegister: (e: FormEvent) => void;
  handlePaymentType: (e: SelectChangeEvent<string>) => void;
  handleSelect: (e: ChangeEvent<HTMLInputElement>) => void;
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void;
  formData: FormTypes;
  total: number;
}

export interface RegistrationTypes {
  registrationData: {
    fullName: string,
    email: string,
    selection: string[],
    paymentType: string, 
    total: number,
    _id: string,
  }
}