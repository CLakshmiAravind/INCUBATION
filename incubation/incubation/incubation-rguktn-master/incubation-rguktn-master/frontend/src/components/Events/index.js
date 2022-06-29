import React from "react";
import {
  EventsContainer,
  EventsWrapper,
  EventsRow,
  EventsTextWrapper,
  TopLine,
  Heading,
  Subtitle,
  EventsLink,
} from "./EventsElements";

const Events = () => {
  return (
    <>
      <EventsContainer>
        <EventsWrapper>
          <EventsRow>
            <EventsTextWrapper>
              <TopLine>1.IIT madras</TopLine>
              <Heading>
                E-summit: -Every year, the Entrepreneurship Cell of IIT Madras
                hosts the Entrepreneurship Summit which looks at innovation and
                entrepreneurship as a process driven by a gamut of disciplines
                with a prime focus on the new engineering challenges and a
                plethora of market opportunities lying alongside them.
              </Heading>
              <Subtitle>
                Stages and Timelines: ROUND 0 -- A set of questions to
                understand the participants better. After successful
                registration, participants will be receiving an E-Summit id
                within 24 hours through email. Participants are required to
                login to the E-Summit portal and answer the questions under
                Round 0. ROUND 1 -- Elevator Pitch; Duration less than 90
                seconds; Registered startups will be invited to submit their
                recorded elevator pitch on GoToPitch; The details for the same
                will be conveyed to the registered startups Round 2 Live
                pitching in front of judges in online mode! Finale Live pitching
                in front of investors from VCs on E-Summit’s platform.
                Connect-Up One-to-one meetings of investors with the startups of
                their interest. TIMELINE:-"Jan - Mar". MODE OF CONDUCT:-
                "online". All that you need to know about ELEVATE, a PAN-India
                level fundraising event that not only aims to bring eminent
                startups from across the nation but also brings in world-class
                mentors, thus throwing a spotlight on some of the most promising
                startups in the country. Through overall leveraging of the
                entire entrepreneurial ecosystem, Elevate gives the startups an
                opportunity to elevate their skills and at the same time, raise
                funds and get themselves into the tremendous pool of market
                opportunities and resources available. VISION: Provide a forum
                for early entrepreneurs, mentors, and investors to exchange
                knowledge and startups to seek investments. MISSION: We strive
                towards supporting early-stage startups with substantial
                business opportunities. We seek to enable valuable interaction
                between principal components spanning entrepreneurs, mentors,
                angel investors, and venture capitalists, thus consolidating the
                entire pipeline of the entrepreneurship ecosystem. INCENTIVES:
                Investment opportunities up to INR 10 Crore Cash prizes worth
                INR 2.25 Lakh Mentoring sessions worth INR 10K for the winners
                Subscription to GoToPitch’s platform for all participating
                startups One-to-one networking with investors and startup
                mentors. ELIGIBILITY: "The event is open to all UG, PG, and
                Ph.D. students of any stream and college. Students who have
                graduated are eligible. Each team must have a minimum of 1 to a
                maximum of 5 members."
              </Subtitle>
              <EventsLink href="https://ecell.iitm.ac.in/home" target="_blank">
                Click Here
              </EventsLink>
            </EventsTextWrapper>
          </EventsRow>
        </EventsWrapper>
      </EventsContainer>
    </>
  );
};

export default Events;
