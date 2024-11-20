import { FormTypes, SelectionTypes } from "@app/interfaces/types";

export function formatSubmission(formData: FormTypes, total: number) {
  // Use reduce to filter out non-true values
  const filteredSelections = Object.keys(formData.selection).filter((x) => formData.selection[x as keyof SelectionTypes]);

  return {
    fullName: `${formData.firstName} ${formData.lastName}`,
    email: formData.email,
    phone: formData.phone,
    selection: filteredSelections, // Use the filtered object
    paymentType: formData.paymentType,
    total: total,
  }
}