import { useRegistrationForm } from "../register/hooks/useRegistrationForm";
import { renderHook, act } from '@testing-library/react';
import { SelectChangeEvent } from '@mui/material';

describe('useRegistrationForm test', () => {
  it('Initialize with default values', ()=> {
    const { result } = renderHook(() => useRegistrationForm())

    expect(result.current.formData.firstName).toBe("");
    expect(result.current.formData.lastName).toBe("");
    expect(result.current.formData.email).toBe("");
    expect(result.current.formData.phone).toBe("");
    expect(result.current.formData.selection.attendAsGolfer).toBe(false);
    expect(result.current.formData.selection.attendAsTeam).toBe(false);
    expect(result.current.formData.selection.attendDinner).toBe(false);
    expect(result.current.formData.selection.sponsorHole).toBe(false);
    expect(result.current.formData.selection.sponsorDoubleHole).toBe(false);
    expect(result.current.formData.selection.sponsorBeverage).toBe(false);
    expect(result.current.formData.selection.sponsorLunch).toBe(false);
    expect(result.current.formData.selection.sponsorDinner).toBe(false);
    expect(result.current.formData.paymentType).toBe("venmo");
    expect(result.current.formData.total).toBe(0);
  });

  it('Update state when handleInput is called', () => {
    const { result } = renderHook(() => useRegistrationForm())

    // Update the first name
    act(() => {
      result.current.handleInput({ target: {id: 'firstName', value: 'Andrew'}} as React.ChangeEvent<HTMLInputElement>)
    })

    expect(result.current.formData.firstName).toBe('Andrew')

    // Update the last name
    act(() => {
      result.current.handleInput({ target: {id: 'lastName', value: 'Jacobs'}} as React.ChangeEvent<HTMLInputElement>)
    })

    expect(result.current.formData.lastName).toBe('Jacobs')

    // Update the email
    act(() => {
      result.current.handleInput({ target: {id: 'email', value: 'jacobs@jacobstestfirm.com'}} as React.ChangeEvent<HTMLInputElement>)
    })

    expect(result.current.formData.email).toBe('jacobs@jacobstestfirm.com')

    // Update the phone number
    act(() => {
      result.current.handleInput({ target: {id: 'phone', value: '555-555-5555'}} as React.ChangeEvent<HTMLInputElement>)
    })

    expect(result.current.formData.phone).toBe('555-555-5555')
  });

  it('Update state when handleSelect is called', () => {
    const { result } = renderHook(() => useRegistrationForm())

    // Select attendAsGolfer
    act(() => {
      result.current.handleSelect({ target: {id: 'attendAsGolfer', value: true}} as unknown as React.ChangeEvent<HTMLInputElement>)
    })

    expect(result.current.formData.selection.attendAsGolfer).toBe(true)

    // Select attendAsTeam
    act(() => {
      result.current.handleSelect({ target: {id: 'attendAsTeam', value: true}} as unknown as React.ChangeEvent<HTMLInputElement>)
    })

    expect(result.current.formData.selection.attendAsTeam).toBe(true)

    // Select attendDinner
    act(() => {
      result.current.handleSelect({ target: {id: 'attendDinner', value: true}} as unknown as React.ChangeEvent<HTMLInputElement>)
    })

    expect(result.current.formData.selection.attendDinner).toBe(true)

    
    // Select sponsorHole
    act(() => {
      result.current.handleSelect({ target: {id: 'sponsorHole', value: true}} as unknown as React.ChangeEvent<HTMLInputElement>)
    })

    expect(result.current.formData.selection.sponsorHole).toBe(true)

    // Select sponsorDoubleHole
    act(() => {
      result.current.handleSelect({ target: {id: 'sponsorDoubleHole', value: true}} as unknown as React.ChangeEvent<HTMLInputElement>)
    })

    expect(result.current.formData.selection.sponsorDoubleHole).toBe(true)

    // Select sponsorBeverage
    act(() => {
      result.current.handleSelect({ target: {id: 'sponsorBeverage', value: true}} as unknown as React.ChangeEvent<HTMLInputElement>)
    })

    expect(result.current.formData.selection.sponsorBeverage).toBe(true)

    // Select sponsorLunch
    act(() => {
      result.current.handleSelect({ target: {id: 'sponsorLunch', value: true}} as unknown as React.ChangeEvent<HTMLInputElement>)
    })

    expect(result.current.formData.selection.sponsorLunch).toBe(true)

    // Select sponsorDinner
    act(() => {
      result.current.handleSelect({ target: {id: 'sponsorDinner', value: true}} as unknown as React.ChangeEvent<HTMLInputElement>)
    })

    expect(result.current.formData.selection.sponsorDinner).toBe(true)
  });

  it('Update state when handlePaymentType is called', () => {
    const { result } = renderHook(() => useRegistrationForm())

    // Change type to 'Card'
    act(() => {
      result.current.handlePaymentType({ target: {id: 'paymentType', value: 'venmo'}} as SelectChangeEvent<string>)
    })

    expect(result.current.formData.paymentType).toBe('venmo')
  });

  
})