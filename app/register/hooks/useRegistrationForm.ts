import { useState, ChangeEvent } from "react";
import { FormTypes, SelectionTypes } from "@app/interfaces/types";
import { SelectChangeEvent } from "@mui/material";

const FORM_DATA: FormTypes = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  selection: {
    attendAsGolfer: false,
    attendAsTeam: false,
    attendDinner: false,
    sponsorHole: false,
    sponsorDoubleHole: false,
    sponsorBeverage: false,
    sponsorLunch: false,
    sponsorDinner: false,
  },
  paymentType: "venmo",
};

export function useRegistrationForm() {
  const [formData, setFormData] = useState<FormTypes>(FORM_DATA);
  const [total, setTotal] = useState(0);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const { id } = e.target;
    
    setFormData((prevState) => ({
      ...prevState,
      selection: {
        ...prevState.selection,
        [id as keyof Selection]: !prevState.selection[id as keyof SelectionTypes],
      },
    }));
  };

  const handlePaymentType = (e: SelectChangeEvent<string>) => {
    setFormData((prevState) => ({
      ...prevState,
      paymentType: e.target.value,  // e.target.value gives the selected option's value
    }));
  };

  return {
    formData,
    total,
    setTotal,
    handleInput,
    handleSelect,
    handlePaymentType
  }
}