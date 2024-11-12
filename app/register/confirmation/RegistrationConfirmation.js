"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import venmoCode from "@public/images/qrCode.png";
import { useSearchParams } from "next/navigation";
import { fetchRegistration } from "@data-access";

export default function RegistrationConfirmation() {
  const [registrationData, setRegistrationData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const queryParams = useSearchParams();
  const confirmationNumber = queryParams.get("c");
  const userFriendlyConfirmationNumber = confirmationNumber
    ?.slice(-8)
    .toUpperCase();

  const getConfirmation = async (confirmationNumber) => {
    const confirmationData = await fetchRegistration(confirmationNumber);
    if (confirmationData) {
      setRegistrationData(confirmationData);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (confirmationNumber) {
      getConfirmation(confirmationNumber);
    }
  }, [confirmationNumber]);

  const renderSelection = () => {
    return registrationData?.selection?.map((item, index) => {
      let customerFriendlyName;

      switch (item) {
        case "attendAsGolfer":
          customerFriendlyName = "Individual Golfer";
          break;
        case "attendAsTeam":
          customerFriendlyName = "Foursome Golf Team";
          break;
        case "attendDinner":
          customerFriendlyName = "Dinner Guest Only";
          break;
        case "sponsorHole":
          customerFriendlyName = "Single Hole Sponsor";
          break;
        case "sponsorDoubleHole":
          customerFriendlyName = "Double Hole Sponsor";
          break;
        case "sponsorBeverage":
          customerFriendlyName = "Beverage Cart Sponsor";
          break;
        case "sponsorLunch":
          customerFriendlyName = "Lunch Sponsor";
          break;
        case "sponsorDinner":
          customerFriendlyName = "Dinner Sponsor";
          break;
        default:
          customerFriendlyName = "Unknown";
      }

      return (
        <li key={index} className="font-bold">
          {customerFriendlyName}
        </li>
      );
    });
  };

  return (
    <>
      {isLoading ? (
        <div>...Loading</div>
      ) : registrationData?.paymentType === "credit" ? (
        <div>
          <div className="text-center text-xs">
            <p>Please save this confirmation number for your records:</p>
            <p className="mt-2 p-5 bg-gray-50">
              <span className="font-bold text-xl">
                {userFriendlyConfirmationNumber.toUpperCase()}
              </span>{" "}
            </p>
          </div>
          <div className="mt-10">
            <p>
              Thank you,{" "}
              <span className="font-bold">{registrationData?.fullName}</span>!
            </p>
            <div className="mt-5">
              Your registration for the following was successful:
              <br />
              <ul className="mt-2 text-sm">{renderSelection()}</ul>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div>
            <p>
              Thank you,{" "}
              <span className="font-bold">{registrationData?.fullName}</span>!
            </p>
            <div className="mt-5">
              You registered for the following:
              <br />
              <ul className="mt-2 text-sm">{renderSelection()}</ul>
            </div>
            <div className="p-6 bg-gray-50 mt-5">
              <p className="text-center mb-3 font-bold uppercase text-red-600">
                Important Notice!
              </p>
              <p>
                <span className="font-bold">
                  Your registration is not complete
                </span>{" "}
                until you receive a confirmation e-mail.
              </p>
              <p className="mt-5">
                To complete your registration, please Venmo your total amount
                due with the name on your registration. We will send a
                confirmation to{" "}
                <span className="font-bold">{registrationData?.email}</span>{" "}
                within 72 hours after payment is received.
              </p>
              <p className="mt-5">
                <span className="font-bold">Total Amount Due:</span> $
                {registrationData?.total?.toFixed(2)}
              </p>

              <p className="mt-5 text-center">
                <Image
                  alt="Venmo QR Code"
                  src={venmoCode}
                  height={250}
                  width={250}
                  className="mx-auto"
                />
                <span className="font-bold mt-2">@Jmann81</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
