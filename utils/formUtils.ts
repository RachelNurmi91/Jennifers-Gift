import { FormTypes } from "@interfaces/types";

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