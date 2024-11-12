"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegistrationStatus() {
  const [isRegistrationOpen] = useState(true);

  const router = useRouter();

  const signUp = () => {
    router.push("/charity/register");
  };

  return (
    <div className="text-center">
      {isRegistrationOpen ? (
        <button
          className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-10 rounded uppercase"
          type="submit"
          onClick={signUp}
        >
          Sign Up Now
        </button>
      ) : (
        <p>
          Thank you for joining us this year! <br />
          Registration for our next event is not yet open.
        </p>
      )}
    </div>
  );
}
