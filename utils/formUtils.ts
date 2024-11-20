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

export function validateForm(formData: FormTypes) {

  if (formData.firstName === "") {
    return "Please enter your first name.";
  }
  if (formData.lastName === "") {
    return "Please enter your last name.";
  }
  if (formData.email === "") {
    return "Please enter your email address.";
  }
  if (formData.phone === "") {
    return "Please enter your mobile number.";
  }
  if (
    formData.selection.attendAsGolfer === false &&
    formData.selection.attendAsTeam === false &&
    formData.selection.attendDinner === false &&
    formData.selection.sponsorHole === false &&
    formData.selection.sponsorDoubleHole === false &&
    formData.selection.sponsorBeverage === false &&
    formData.selection.sponsorLunch === false &&
    formData.selection.sponsorDinner === false
  ) {
    return "Please chose at least one participation selection.";
  }
};