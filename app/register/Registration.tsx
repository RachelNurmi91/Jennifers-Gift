"use client";

import { useEffect, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { createRegistration } from "@data-access";
import { validateForm } from "@utils/formUtils";
import { formatSubmission } from "@utils/mapperUtils";
import RegistrationForm from "./RegistrationForm";
import { useRegistrationForm } from "./hooks/useRegistrationForm";

export default function Registration() {
  const {
    formData,
    handleInput,
    handleSelect,
    handlePaymentType
  } = useRegistrationForm();
  const router = useRouter();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [])

  const onRegister = async (e: FormEvent) => {
    e.preventDefault();

    let errors = validateForm(formData);
    if (errors) {
      alert(errors);
      return;
    }

    let confirmationNumber = await createRegistration(formatSubmission(formData));

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
    />
    
  );
}
