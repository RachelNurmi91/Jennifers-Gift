export function calculateTotal(selection:string, addOn:boolean, currentTotal: number) {

  let total = currentTotal;

  // Calculate total based on selections
    if (selection) {
      switch (selection) {
        case "attendAsGolfer":
          total += addOn ? 150 : -150;
          break;
        case "attendAsTeam":
          total += addOn ? 600 : -600;
          break;
        case "attendDinner":
          total += addOn ? 60 : -60;
          break;
        case "sponsorHole":
          total += addOn ? 150 : -150;
          break;
        case "sponsorDoubleHole":
          total += addOn ? 200 : -200;
          break;
        case "sponsorBeverage":
          total += addOn ? 500 : -500;
          break;
        case "sponsorLunch":
          total += addOn ? 750 : -750;
          break;
        case "sponsorDinner":
          total += addOn ? 1000 : -1000;
          break;
        default:
          total += 0;
      }
    }
  
  return total
};

export function calculateProcessingFee(total: number) {
  return total + (total * 0.03);
}