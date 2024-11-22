import { formatSubmission } from "../mapperUtils"
import { describe, expect, it } from "@jest/globals";

describe('Format form submission', () => {
  it('Properly filled out form submission', () => {

    const formData = {
      firstName: 'Andrew',
      lastName: 'Jacobs',
      email: 'jacobs@jacobstestfirm.com',
      phone: '555-555-5555',
      selection: {
        attendAsGolfer: true,
        attendAsTeam: false,
        attendDinner: false,
        sponsorHole: false,
        sponsorDoubleHole: false,
        sponsorBeverage: false,
        sponsorLunch: false,
        sponsorDinner: false,
      },
      paymentType: 'venmo',
    }

    const result = formatSubmission(formData, 1100);
    const formattedSubmission = {
      fullName: `Andrew Jacobs`,
      email: 'jacobs@jacobstestfirm.com',
      phone: '555-555-5555',
      selection: ['attendAsGolfer'], // Use the filtered object
      paymentType: 'venmo',
      total: 1100,
    }

    expect(result).toStrictEqual(formattedSubmission);
  })
})