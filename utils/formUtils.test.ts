import { validateForm } from "./formUtils";
import { describe, expect, it } from "@jest/globals";

describe('Validate form', () => {
  it('Verify missing first name field returns error', () => {

    const formData = {
      firstName: '',
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
      paymentType: 'card',
    }
    const result = validateForm(formData)
    const error = 'Please enter your first name.'
    expect(result).toBe(error);
  })

  it('Verify missing last name field returns error', () => {

    const formData = {
      firstName: 'Andrew',
      lastName: '',
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
      paymentType: 'card',
    }
    const result = validateForm(formData)
    const error = 'Please enter your last name.'
    expect(result).toBe(error);
  })

  it('Verify missing email field returns error', () => {

    const formData = {
      firstName: 'Andrew',
      lastName: 'Jacobs',
      email: '',
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
      paymentType: 'card',
    }
    const result = validateForm(formData)
    const error = 'Please enter your email address.'
    expect(result).toBe(error);
  })

  it('Verify missing email field returns error', () => {

    const formData = {
      firstName: 'Andrew',
      lastName: 'Jacobs',
      email: 'jacobs@jacobstestfirm.com',
      phone: '',
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
      paymentType: 'card',
    }
    const result = validateForm(formData)
    const error = 'Please enter your mobile number.'
    expect(result).toBe(error);
  })

  it('Verify missing email field returns error', () => {

    const formData = {
      firstName: 'Andrew',
      lastName: 'Jacobs',
      email: 'jacobs@jacobstestfirm.com',
      phone: '555-555-5555',
      selection: {
        attendAsGolfer: false,
        attendAsTeam: false,
        attendDinner: false,
        sponsorHole: false,
        sponsorDoubleHole: false,
        sponsorBeverage: false,
        sponsorLunch: false,
        sponsorDinner: false,
      },
      paymentType: 'card',
    }
    const result = validateForm(formData)
    const error = 'Please chose at least one participation selection.'
    expect(result).toBe(error);
  })
})