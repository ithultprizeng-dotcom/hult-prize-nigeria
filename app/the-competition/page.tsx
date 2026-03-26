import { AboutTheCompetition } from "./components/About";
import { TheCompetitionDetails } from "./components/Details";
import { Experience } from "./components/Experience";
import { Featuring } from "./components/Featuring";
import { TheCompetitionHero } from "./components/Hero";

export default function TheCompetition() {
  return (
    <main className="mt-16">
      <TheCompetitionHero />
      <TheCompetitionDetails />
      <AboutTheCompetition />
      <Featuring />
      <Experience />
    </main>
  );
}
