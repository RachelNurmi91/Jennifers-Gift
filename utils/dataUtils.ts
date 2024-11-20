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

export function calculateTotal(selections:SelectionTypes, paymentType: string) {

  let total = 0;

  // Calculate total based on selections
  Object.keys(selections).forEach((selection) => {
    if (selections[selection as keyof SelectionTypes]) {
      switch (selection) {
        case "attendAsGolfer":
          total += 150;
          break;
        case "attendAsTeam":
          total += 600;
          break;
        case "attendDinner":
          total += 60;
          break;
        case "sponsorHole":
          total += 150;
          break;
        case "sponsorDoubleHole":
          total += 200;
          break;
        case "sponsorBeverage":
          total += 500;
          break;
        case "sponsorLunch":
          total += 750;
          break;
        case "sponsorDinner":
          total += 1000;
          break;
        default:
          total += 0;
      }
    }
  });

  // Add payment type fee if payment type is "card"
  if (paymentType === "card") {
    total += total * 0.03;
  }

  return total
};