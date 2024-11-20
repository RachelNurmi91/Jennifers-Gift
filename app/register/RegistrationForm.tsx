"use client";

import CheckboxStyle from "@components/Checkbox";
import InputStyle from "@components/Input";
import Form from "next/form";
import ButtonStyle from "@components/Button";
import SelectStyle from "@components/Select";
import { RegistrationFormTypes } from "@app/interfaces/types";

const RegistrationForm: React.FC<RegistrationFormTypes> = ({
  onRegister,
  handlePaymentType,
  handleSelect,
  handleInput,
  formData,
  total
}) => {
  return (
    <Form onSubmit={onRegister} action="#">
      <h2 className="text-base font-semibold leading-7 text-gray-900">
        Register for the 2025 Lyman Orchards Golf Tournament
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <InputStyle
            label="First Name"
            id="firstName"
            placeholder="Jane"
            action={handleInput}
          />
        </div>

        <div className="sm:col-span-3">
          <InputStyle
            label="Last Name"
            id="lastName"
            placeholder="Smith"
            action={handleInput}
          />
        </div>
        <div className="sm:col-span-3">
          <InputStyle
            label="Email Address"
            id="email"
            placeholder="janesmith@email.com"
            action={handleInput}
          />
        </div>
        <div className="sm:col-span-3">
          <InputStyle
            label="Mobile Number"
            id="phone"
            placeholder="555-555-5555"
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
          onSelect={handleSelect}
        />
        <CheckboxStyle
          id="attendAsTeam"
          text="Foursome Golf Team"
          desc="You and your teammates will enjoy golf, dinner and complimentary beverages"
          onSelect={handleSelect}
        />
        <CheckboxStyle
          id="attendDinner"
          text="Dinner Guest Only"
          desc="Enjoy dinner and complimentary beverages"
          onSelect={handleSelect}
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
          onSelect={handleSelect}
        />
        <CheckboxStyle
          id="sponsorDoubleHole"
          text="Double Hole Sponsor"
          desc="18 x 24 sign at two of the golf holes"
          onSelect={handleSelect}
        />
        <CheckboxStyle
          id="sponsorBeverage"
          text="Beverage Cart Sponsor"
          desc="On-cart advertising and flyer recognition"
          onSelect={handleSelect}
        />
        <CheckboxStyle
          id="sponsorLunch"
          text="Lunch Sponsor"
          desc="Signage at lunch and flyer recognition"
          onSelect={handleSelect}
        />
        <CheckboxStyle
          id="sponsorDinner"
          text="Dinner Sponsor"
          desc="Signage at dinner and flyer recognition"
          onSelect={handleSelect}
        />
      </div>
      <div className="mt-10">
        <span className="font-bold">Preferred Method of Payment</span>
        <div className="sm:col-span-3">
          <div className="mt-5">
          <SelectStyle
            id="paymentType"
            label="Payment Type"
            action={handlePaymentType}  // Use the updated handlePaymentType handler
            options={[
              { value: "venmo", label: "Venmo" },
              { value: "card", label: "Debit/Credit Card" },
            ]}
            value={formData.paymentType}
            desc={
              formData.paymentType
                ? formData.paymentType === "card"
                  ? "A 3% processing fee will be added for credit card payments."
                  : "Further Venmo instructions will be provided after registration."
                : undefined
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

export default RegistrationForm;