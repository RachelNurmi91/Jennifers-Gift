"use client";

import { useState, useEffect } from "react";
import CheckboxStyle from "@components/Checkbox";
import InputStyle from "@components/Input";
import { useRouter } from "next/navigation";
import { createRegistration } from "@data-access";
import Form from "next/form";
import ButtonStyle from "@components/Button";
import SelectStyle from "@components/Select";

const REGISTRATION_FORM = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
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
  paymentType: "venmo",
};

export default function RegistrationForm() {
  const [regForm, setRegForm] = useState(REGISTRATION_FORM);
  const [total, setTotal] = useState(0);

  const router = useRouter();

  const handleInput = async (e) => {
    setRegForm((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const handleSelect = async (e) => {
    setRegForm((prevState) => ({
      ...prevState,
      selection: {
        ...prevState.selection,
        [e.target.id]: !prevState.selection[e.target.id], // Toggling value
      },
    }));
  };

  const handlePaymentType = async (e) => {
    console.log(e.target.value);
    setRegForm((prevState) => ({
      ...prevState,
      paymentType: e.target.value,
    }));
  };

  useEffect(() => {
    let total = 0;

    // Calculate total based on selections
    Object.keys(regForm.selection).forEach((selection) => {
      if (regForm.selection[selection]) {
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
    if (regForm.paymentType === "card") {
      total += total * 0.03;
    }

    setTotal(total);
  }, [regForm.selection, regForm.paymentType]);

  const errorCheck = () => {
    if (regForm.firstName === "") {
      return "Please enter your first name.";
    }
    if (regForm.lastName === "") {
      return "Please enter your last name.";
    }
    if (regForm.email === "") {
      return "Please enter your email address.";
    }
    if (regForm.phone === "") {
      return "Please enter your mobile number.";
    }
    if (
      regForm.selection.attendAsGolfer === false &&
      regForm.selection.attendAsTeam === false &&
      regForm.selection.attendDinner === false &&
      regForm.selection.sponsorHole === false &&
      regForm.selection.sponsorDoubleHole === false &&
      regForm.selection.sponsorBeverage === false &&
      regForm.selection.sponsorLunch === false &&
      regForm.selection.sponsorDinner === false
    ) {
      return "Please chose at least one participation selection.";
    }
  };

  const onRegister = async (e) => {
    e.preventDefault();

    let errors = errorCheck();

    if (errors) {
      alert(errors);
      return;
    }

    // Use reduce to filter out non-true values
    const filteredSelections = Object.keys(regForm.selection).filter(function (
      x
    ) {
      return regForm.selection[x] !== false;
    });

    const submission = {
      fullName: `${regForm.firstName} ${regForm.lastName}`,
      email: regForm.email,
      phone: regForm.phone,
      selection: filteredSelections, // Use the filtered object
      paymentType: regForm.paymentType,
      total: total,
    };

    let confirmationNumber = await createRegistration(submission);

    if (confirmationNumber) {
      router.push(`/register/confirmation/${confirmationNumber}`);
    }
  };

  return (
    <Form onSubmit={onRegister}>
      <h2 className="text-base font-semibold leading-7 text-gray-900">
        Register for the 2025 Lyman Orchards Golf Tournament
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <InputStyle
            label="First Name"
            id="firstName"
            placeholder="Jane"
            type="text"
            action={handleInput}
          />
        </div>

        <div className="sm:col-span-3">
          <InputStyle
            label="Last Name"
            id="lastName"
            placeholder="Smith"
            type="text"
            action={handleInput}
          />
        </div>
        <div className="sm:col-span-3">
          <InputStyle
            label="Email Address"
            id="email"
            placeholder="janesmith@email.com"
            type="text"
            action={handleInput}
          />
        </div>
        <div className="sm:col-span-3">
          <InputStyle
            label="Mobile Number"
            id="phone"
            placeholder="555-555-5555"
            type="tel"
            action={handleInput}
          />
        </div>
      </div>

      <div className="mt-10">
        <span className="font-bold">Plan to attend?</span>
        <p className="text-sm">
          Please select the ways in which you'd like to participate. Choose at
          least one.
        </p>
      </div>
      <div className="ml-4 mt-4">
        <CheckboxStyle
          id="attendAsGolfer"
          text="Individual Golfer"
          desc="Golf, dinner and complimentary beverages"
          onSelect={(e) => handleSelect(e)}
        />
        <CheckboxStyle
          id="attendAsTeam"
          text="Foursome Golf Team"
          desc="You and your teammates will enjoy golf, dinner and complimentary beverages"
          onSelect={(e) => handleSelect(e)}
        />
        <CheckboxStyle
          id="attendDinner"
          text="Dinner Guest Only"
          desc="Enjoy dinner and complimentary beverages"
          onSelect={(e) => handleSelect(e)}
        />
      </div>

      <div className="mt-10">
        <span className="font-bold">Prefer to Sponsor?</span>
        <p className="text-sm">
          Please select the ways in which you'd like to sponsor. Choose at least
          one.
        </p>
      </div>
      <div className="ml-4 mt-4">
        <CheckboxStyle
          id="sponsorHole"
          text="Single Hole Sponsor"
          desc="18 x 24 sign at a single hole"
          onSelect={(e) => handleSelect(e)}
        />
        <CheckboxStyle
          id="sponsorDoubleHole"
          text="Double Hole Sponsor"
          desc="18 x 24 sign at two of the golf holes"
          onSelect={(e) => handleSelect(e)}
        />
        <CheckboxStyle
          id="sponsorBeverage"
          text="Beverage Cart Sponsor"
          desc="On-cart advertising and flyer recognition"
          onSelect={(e) => handleSelect(e)}
        />
        <CheckboxStyle
          id="sponsorLunch"
          text="Lunch Sponsor"
          desc="Signage at lunch and flyer recognition"
          onSelect={(e) => handleSelect(e)}
        />
        <CheckboxStyle
          id="sponsorDinner"
          text="Dinner Sponsor"
          desc="Signage at dinner and flyer recognition"
          onSelect={(e) => handleSelect(e)}
        />
      </div>
      <div className="mt-10">
        <span className="font-bold">Preferred Method of Payment</span>
        <div className="sm:col-span-3">
          <div className="mt-5">
            <SelectStyle
              id="paymentType"
              label="Payment Type"
              action={(e) => handlePaymentType(e)}
              options={[
                {
                  value: "venmo",
                  label: "Venmo",
                },
                {
                  value: "card",
                  label: "Debit/Credit Card",
                },
              ]}
              value={regForm.paymentType}
              desc={
                regForm.paymentType
                  ? regForm.paymentType === "card"
                    ? "A 3% processing fee will be added for credit card payments."
                    : "Further Venmo instructions will be provided after registration."
                  : null
              }
            />
          </div>
        </div>
      </div>
      <div className="my-10 text-end">
        <span className="font-bold">Your Total Cost:</span> ${total.toFixed(2)}
      </div>
      <div className="text-center">
        <ButtonStyle text="Register" />
      </div>
    </Form>
  );
}
