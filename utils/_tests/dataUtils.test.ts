import { calculateTotal, calculateProcessingFee } from "../dataUtils";
import { describe, expect, it } from "@jest/globals";

describe('Calculate processing fee', () => {
  it('Add processing fee', () => {
    const result = calculateProcessingFee(1000)
    const calculatedTotal = 1000 + (1000 * 0.03);
    expect(result).toBe(calculatedTotal)
  })
})

describe('Calculate total of users selections', () => {
  it('Calculate total', () => {

    const selections = {
      attendAsGolfer: false,
      attendAsTeam: false,
      attendDinner: false,
      sponsorHole: false,
      sponsorDoubleHole: false,
      sponsorBeverage: false,
      sponsorLunch: false,
      sponsorDinner: false,
    }

    const result = calculateTotal('sponsorDinner', !selections.sponsorDinner, 0);
    const selectionTotal = 1000;
    expect(result).toBe(selectionTotal);
  })

  it('Update total', () => {

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

    const result = calculateTotal('attendAsTeam', selections.attendAsTeam, 1000);
    const selectionTotal = 1000 + 600;
    expect(result).toBe(selectionTotal);
  })
})