"use client";

import Banner from "@components/Banner";
import { useState } from "react";
import Card from "@components/Card";
import { useRouter } from "next/navigation";

export default function Charity() {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(true);

  const router = useRouter();

  const signUp = () => {
    router.push("/charity/register");
  };

  return (
    <section className="flex-center flex-col w-full">
      <Banner title="Annual Charity Golf Tournament" />
      <div className="mx-auto p-10" style={{ maxWidth: "900px" }}>
        <p>
          Our annual golf tournament at Lyman Orchards is a day dedicated to fun
          and raising awareness for metastatic breast cancer research. The event
          features exciting raffles with fantastic prizes and offers a chance to
          support a great cause while enjoying a day on the course.
        </p>
        <p className="mt-5">
          All proceeds from the tournament go directly to support critical
          research efforts in the fight against metastatic breast cancer. People
          can participate by playing in the tournament, enjoying a delicious
          dinner with beverages, or becoming a sponsor.
        </p>

        <Card
          image={null}
          title="Play in the tournament"
          subtitle="Play golf and enjoy dinner & beverages"
          desc={
            <>
              <p>
                Before the tournament begins, take advantage of the driving
                range and putting green, available 1.5 hours prior to the start.
                Then, enjoy 18 holes of championship golf with canopied carts
                prearranged with guest names and hole assignments for a seamless
                experience. For added convenience, a fully staffed bag drop area
                will be available, and trained rangers will be on-site to assist
                with any issues and ensure smooth play.
              </p>
              <p className="mt-4">
                Golfers certainly won't go hungry! Hot dogs and chips will be
                served before teeing off. After the tournament, relax with a
                buffet dinner featuring beer, wine, and soda. Exciting raffle
                prizes will be drawn during dinner, with tickets available for
                purchase both during registration and after a round of golf.
                Additionally, golfers will be entered in a complimentary Hole in
                One package offering four exciting prizes. To wrap up the day,
                we’ll send participates off with a delicious "Best of CT" Lyman
                Orchard 6" personal pie.
              </p>
            </>
          }
        />
        <Card
          image={null}
          title="Join us for dinner"
          subtitle="Skip golf and join us for dinner & beverages"
          desc={
            <>
              <p>
                For those joining us for dinner only, enjoy a delicious buffet
                featuring pasta, chicken, beef, salad, warm rolls, and
                vegetables to keep you satisfied. Unwind and relax with beer,
                wine, and soda served throughout dinner.
              </p>
              <p className="mt-4">
                Raffle tickets will be available for purchase during
                registration and after golf, with the drawing happening during
                dinner. Expect fun and exciting prizes! Before guests head out,
                don’t forget to grab a complimentary "Best of CT" Lyman Orchard
                6" personal pie to take home, a sweet reminder of the day.
              </p>
            </>
          }
        />
        <Card
          image={null}
          title="Become a Sponsor"
          desc={
            <>
              <p>
                Become a sponsor and gain valuable visibility throughout the
                event! Each sponsorship includes an 18x24 sign displaying their
                information at a hole and recognition on our event flyer.
                Beverage cart sponsors enjoy on-cart advertising in addition to
                flyer recognition, while lunch and dinner sponsors receive
                signage at meals along with a mention on the flyer.
              </p>
              <p className="mt-4">
                It's a great opportunity to showcase a brand or send a message
                and support the event!
              </p>
            </>
          }
        />
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
      </div>
    </section>
  );
}
