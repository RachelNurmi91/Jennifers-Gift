"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ButtonStyle from "@components/Button";

export default function RegisterButton() {
  const [isRegistrationOpen] = useState(true);

  const router = useRouter();

  const signUp = () => {
    router.push("/register");
  };

  return (
    <div className="text-center">
      {isRegistrationOpen ? (
        <ButtonStyle text="Sign Up Now" action={signUp} />
      ) : (
        <p>
          Thank you for joining us this year! <br />
          Registration for our next event is not yet open.
        </p>
      )}
    </div>
  );
}
