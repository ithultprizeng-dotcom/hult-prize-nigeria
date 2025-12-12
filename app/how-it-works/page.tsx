import Benefits from "./components/benefits";
import { CallToAction } from "./components/callToAction";
import Challenge from "./components/challenge";
import CompetitionJourney from "./components/competitionJourney";
import Hero from "./components/hero";
import { JudgingCriteria } from "./components/judgingCriteria";
import Participants from "./components/participants";

export default function HowItWorks() {
  return (
    <main className="min-h-screen px-6 py-8">
      <Hero />
      <Challenge />
      <Participants />
      <CompetitionJourney />
      <Benefits />
      <JudgingCriteria />
      <CallToAction />
    </main>
  );
}
