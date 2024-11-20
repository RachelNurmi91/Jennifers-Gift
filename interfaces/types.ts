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
