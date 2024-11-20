interface SelectionTypes {
  attendAsGolfer: boolean;
  attendAsTeam: boolean;
  attendDinner: boolean;
  sponsorHole: boolean;
  sponsorDoubleHole: boolean;
  sponsorBeverage: boolean;
  sponsorLunch: boolean;
  sponsorDinner: boolean;
}

interface FormTypes {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  selection: SelectionTypes;
  paymentType: string;
}

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