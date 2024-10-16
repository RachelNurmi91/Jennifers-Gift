"use client";

import Banner from "@components/Banner";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import venmoCode from "@public/images/qrCode.png";

export default function Confirmation() {
  const queryParams = useSearchParams();
  const confirmationNumber = queryParams.get("c");
  const userFriendlyConfirmationNumber = confirmationNumber
    ?.slice(-8)
    .toUpperCase();

  // State to store the registration data
  const [registrationData, setRegistrationData] = useState(null);

  // Fetch registration data based on confirmation number (_id)
  const fetchRegistration = async () => {
    try {
      const response = await fetch(
        `/api/registration?id=${confirmationNumber}`
      );

      if (response.ok) {
        const data = await response.json();
        setRegistrationData(data);
      } else {
        console.error("Failed to fetch registration:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching registration:", error);
    }
  };

  useEffect(() => {
    if (confirmationNumber) {
      fetchRegistration();
    }
  }, [confirmationNumber]);

  const renderSelection = () => {
    return (
      <>
        {registrationData?.selection.map((item, index) => {
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
        })}
      </>
    );
  };

  const renderPaymentConfirmation = () => {
    if (registrationData?.paymentType === "credit") {
      return (
        <div>
          <div className="text-center text-xs">
            <p>Please save this confirmation number for your records:</p>
            <p className="mt-2  p-5 bg-gray-50">
              <span className="font-bold text-xl">
                {userFriendlyConfirmationNumber}
              </span>{" "}
            </p>
          </div>
          <div className="mt-10">
            <p>
              Thank you,{" "}
              <span className="font-bold">{registrationData?.fullName}</span>!
            </p>
            <p className="mt-5">
              Your registration for the following was successful:
              <br />
              <ul className="mt-2 text-sm">{renderSelection()}</ul>
            </p>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div>
            <p>
              Thank you,{" "}
              <span className="font-bold">{registrationData?.fullName}</span>!
            </p>
            <p className="mt-5">
              You registered for the follow:
              <br />
              <ul className="mt-2 text-sm">{renderSelection()}</ul>
            </p>
            <div className="p-5 bg-gray-50 mt-5">
              <p>
                <span className="font-bold text-red-600">Please note:</span>{" "}
                Your registration will not be complete until you receive a
                confirmation.
              </p>
              <p className="mt-5">
                To complete your registration please Venmo us your total amount
                due with the name on your registration. We will send a
                confirmation to{" "}
                <span className="font-bold">{registrationData?.email}</span>{" "}
                within 72 hours after payment is received.
              </p>
              <p className="mt-5">
                <span className="font-bold">Total Amount Due:</span> $
                {registrationData?.total.toFixed(2)}
              </p>

              <p className="mt-5 text-center">
                <Image
                  src={venmoCode}
                  height={250}
                  width={250}
                  className="mx-auto"
                />
                <p className="font-bold mt-2">@Jmann81</p>
              </p>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <section className="flex-center flex-col w-full">
      <Banner title="Annual Charity Golf Tournament" />
      <div className="mx-auto p-10" style={{ maxWidth: "900px" }}>
        {registrationData && renderPaymentConfirmation()}
      </div>
    </section>
  );
}
