"use client";

import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { createRegistration } from "@data-access";
import { SelectChangeEvent } from "@mui/material";
import { calculateTotal } from "@utils/dataUtils";
import { validateForm } from "@utils/formUtils";
import { formatSubmission } from "@utils/mapperUtils";
import RegistrationForm from "./RegistrationForm";
import { FormTypes, SelectionTypes } from "@app/interfaces/types";

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

export default function Registration() {
  const [formData, setFormData] = useState<FormTypes>(FORM_DATA);
  const [total, setTotal] = useState(0);

  const router = useRouter();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [])

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

  useEffect(() => {
    const total: number = calculateTotal(formData.selection, formData.paymentType)
    setTotal(total);
  }, [formData.selection, formData.paymentType]);

  const onRegister = async (e: FormEvent) => {
    e.preventDefault();

    let errors = validateForm(formData);
    if (errors) {
      alert(errors);
      return;
    }

    let confirmationNumber = await createRegistration(formatSubmission(formData, total));

    if (confirmationNumber) {
      router.push(`/register/confirmation?id=${confirmationNumber}`);
    }
  };

  return (
    <RegistrationForm
      onRegister={onRegister}
      handlePaymentType={handlePaymentType}
      handleSelect={handleSelect}
      handleInput={handleInput}
      formData={formData}
      total={total}
    />
    
  );
}
