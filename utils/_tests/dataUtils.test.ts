import { calculateTotal } from "../dataUtils";
import { describe, expect, it } from "@jest/globals";

describe('Calculate total of users selections', () => {
  it('Calculate total with a card payment', () => {

    const selections = {
      attendAsGolfer: false,
      attendAsTeam: true,
      attendDinner: false,
      sponsorHole: false,
      sponsorDoubleHole: false,
      sponsorBeverage: true,
      sponsorLunch: false,
      sponsorDinner: false,
    }
    
    const paymentType = "card";

    const result = calculateTotal(selections, paymentType);
    const selectionTotal = 600 + 500;
    const processingFee = selectionTotal * 0.03;
    const total = selectionTotal + processingFee;
    expect(result).toBe(total);
  })

  it('Calculate total with a Venmo payment', () => {

    const selections = {
      attendAsGolfer: false,
      attendAsTeam: true,
      attendDinner: false,
      sponsorHole: false,
      sponsorDoubleHole: false,
      sponsorBeverage: true,
      sponsorLunch: false,
      sponsorDinner: false,
    }
    
    const paymentType = "venmo";

    const result = calculateTotal(selections, paymentType);
    const total = 600 + 500;
    expect(result).toBe(total)
  })
})