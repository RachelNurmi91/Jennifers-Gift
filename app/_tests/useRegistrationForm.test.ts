import { useRegistrationForm } from "../register/hooks/useRegistrationForm";
import { renderHook, act } from '@testing-library/react';

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
    expect(result.current.total).toBe(0);
  })
})