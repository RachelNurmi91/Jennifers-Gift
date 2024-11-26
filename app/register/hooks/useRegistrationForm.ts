import { useState, ChangeEvent } from "react";
import { FormTypes, SelectionTypes } from "@app/interfaces/types";
import { SelectChangeEvent } from "@mui/material";
import { calculateTotal } from "../../../utils/dataUtils";

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
  total: 0,
};

export function useRegistrationForm() {
  const [formData, setFormData] = useState<FormTypes>(FORM_DATA);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const { id } = e.target;
  
    // Update selection first
    setFormData((prevState) => {
      const newSelection = {
        ...prevState.selection,
        [id as keyof SelectionTypes]: !prevState.selection[id as keyof SelectionTypes],
      };
  
      // Calculate the new total based on the updated selection
      const calculatedTotal = calculateTotal(id, !prevState.selection[id as keyof SelectionTypes], prevState.total);
  
      // Return the updated state
      return {
        ...prevState,
        selection: newSelection,
        total: calculatedTotal,
      };
    });
  };
  

  const handlePaymentType = (e: SelectChangeEvent<string>) => {
    setFormData((prevState) => ({
      ...prevState,
      paymentType: e.target.value,  // e.target.value gives the selected option's value
    }));
  };

  return {
    formData,
    handleInput,
    handleSelect,
    handlePaymentType
  }
}