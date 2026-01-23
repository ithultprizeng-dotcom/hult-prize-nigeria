import { ReactElement } from "react";
import {
  Briefcase,
  Users,
  ChartUp,
  Confidence,
  HandLove,
  Certificate,
} from "@/src/components/ui/SvgIcons";
import { StaticImageData } from "next/image";
import financial_growth_image from "@/public/images/Financial Growth Concept with Coins.jpg";
import bridge_image from "@/public/images/Miniature Wooden Bridge.jpg";
import rocket_image from "@/public/images/Retro Rocket Illustration.jpg";

export const eligibleParticipants: string[] = [
  "Undergraduate and postgraduate students enrolled in Nigerian universities",
  "Students from public and private institutions",
  "Innovators passionate about solving social issues through business",
  "Team Players (2 -4 per team) or individuals willing to form teams during the program",
  "Students from any discipline (not just business or tech)",
];

export const irrelevant_things: string[] = [
  "A saved business",
  "Prior startup experience",
  "Funding to begin",
];

interface AdditionalContentType {
  contentHeading: string;
  contentText?: string;
  contentBulletPoints: string[];
}

interface bulletPoints {
  bulletPointHeading: string;
  bulletPointsContent: string[];
}

export interface CompetitionTimelineType {
  level: string;
  headingText: string;
  associatedText?: string;
  bulletPoints: bulletPoints;
  additionalContent?: AdditionalContentType;
  concludingStatement?: string;
}
export const competition_timeline: CompetitionTimelineType[] = [
  {
    level: "Register",
    headingText: "Register Your Team or Idea",
    associatedText: "Your journey begins with registration",
    bulletPoints: {
      bulletPointHeading: "Students will have to",
      bulletPointsContent: [
        "Create an account on  the platform",
        "Register individually or as a team",
        "Select or submit a social problem they want to solve",
        "Join a verified campus chapter (if available)",
        "Get matched with a Chapter President if they don't have a local chapter",
      ],
    },
    additionalContent: {
      contentHeading:
        "Once registration is complete students will get access to",
      contentBulletPoints: [
        "Competition updates",
        "Training resources",
        "Networking opportunities",
        "Event invitations",
        "Announcements and submission deadlines",
      ],
    },
  },
  {
    level: "Build Team",
    headingText: "Team Formation & Problem Selection",
    associatedText:
      "After registration, the goal is to build a team and choose a problem worth solving.",
    bulletPoints: {
      bulletPointHeading: "Teams typically consist of",
      bulletPointsContent: [
        "A builder (tech or product)",
        "A marketer or storyteller",
        "A problem solver or strategist",
        "A finance or operations lead",
      ],
    },
    additionalContent: {
      contentHeading: "Students can then selet a challenge area, such as:",
      contentBulletPoints: [
        "Food security",
        "Education",
        "Climate action",
        "Employment",
        "Financial inclusion",
        "Healthcare",
        "Clean energy",
        "Poverty reduction",
      ],
    },
    concludingStatement:
      "At this point, focus is one question: What real problem exists around me that I can solve sustainably?",
  },
  {
    level: "Training and prep",
    headingText: "Training, mentorship & development",
    associatedText:
      "Participants go through guided development programs both online and offline.",
    bulletPoints: {
      bulletPointHeading: "Participants will recieve",
      bulletPointsContent: [
        "Business model training",
        "Pitching workshops",
        "Design thinking sessions",
        "Customer discovery guidance",
        "Market validation frameworks",
        "Startup legal basics",
        "Financial modeling support",
      ],
    },
    additionalContent: {
      contentHeading: "Additionally, teams get",
      contentBulletPoints: [
        "Mentorship from entrepreneurs, professionals and industry leaders",
        "Feedback sessions to refine ideas",
        "Access to training materials and templates",
        "Startup checklists and structure milestones",
      ],
    },
    concludingStatement:
      "The aim is to tranform raw ideas into viable startups",
  },
  {
    level: "Campus Pitch",
    headingText: "On-Campus Qualifiers",
    associatedText:
      "Campus chapters organize local competitions at universities",
    bulletPoints: {
      bulletPointHeading:
        "At this stage, teams pitch to a panel of judges and are evaluated based on the following",
      bulletPointsContent: [
        "Problem Clarity",
        "Innovation",
        "Feasibility",
        "Business model strength",
        "Social Impact",
        "Team capacity",
      ],
    },
    concludingStatement:
      "Winners from each campus move forward into the national phase. This stage filters ideas and prepares teams for serious startup building.",
  },
  {
    level: "National Finals",
    headingText: "National Competiton (Hult Prize Nigeria)",
    associatedText: "Qualified teams advance to the national competition",
    bulletPoints: {
      bulletPointHeading: "Here, teams:",
      bulletPointsContent: [
        "Compete with the best teams in Nigeria",
        "Pitch before senior investors and excutives",
        "Receive deeper mentorship",
        "Improve prototypes",
        "Strengthen market strategy",
      ],
    },
    additionalContent: {
      contentHeading: "At this stage",
      contentBulletPoints: [
        "Teams refine traction",
        "Build MVPs",
        "Test assumptions",
        "Improve revenue models",
      ],
    },
    concludingStatement:
      "Only a few teams qualify for the regional/global stage",
  },
  {
    level: "Global Stage",
    headingText: "Regional and global finals",
    associatedText:
      "Winning teams represent Nigeria at the international level",
    bulletPoints: {
      bulletPointHeading: "This includes",
      bulletPointsContent: [
        "Regional summits or accelerators",
        "Global pitching events",
        "Startup bootcamps",
        "Venture-building support",
      ],
    },
    additionalContent: {
      contentHeading: "At the global finals",
      contentBulletPoints: [
        "Finalists pitch against teams from over 120 countries",
        "One winning team receives $1 million USD in startup funding",
        "All finalists receive global exposure and investor connections",
      ],
    },
  },
];

export interface HultPrizeBenefitsType {
  title: string;
  subHeading: string;
  textContent: string;
  svg: ReactElement;
  tag: string;
  imgSrc?: StaticImageData;
  block?: string;
}

export const hultPrizeNigeriaBenefits: HultPrizeBenefitsType[] = [
  {
    title: "Practical startup experience in Nigeria",
    subHeading: "Build a real startup, not just academic projects",
    textContent:
      "Hult Prize Nigeria equips Nigerian students with hands-on business experience by turning ideas into real startups that solve Nigeria’s biggest challenges. From developing business models to testing products in local communities, you gain practical exposure to building solutions that work within the Nigerian economy.",
    svg: Briefcase(),
    tag: "experience",
  },
  {
    title: "powerful network across Nigeria & beyond",
    subHeading:
      "Connect with Nigerians building the future and the world watching them",
    textContent:
      "As a Hult Prize Nigeria participant, you become part of a nationwide and international network of innovators, founders, investors, mentors, and change-makers. From Lagos to Abuja, Enugu to Ibadan, you’ll build lasting relationships with people who share your vision. Beyond Nigeria, you join a global community in over 120 countries — opening doors to international partnerships, scholarships, internships and collaboration opportunities.",
    svg: Users(),
    tag: "network",
    imgSrc: bridge_image,
    block: "landscape one",
  },
  {
    title: "Access to funding & investors for nigerian startups",
    subHeading: "Funding is no longer a barrier. It's a target",
    textContent:
      "Hult Prize Nigeria gives Nigerian students access to startup funding opportunities, local investor networks, global venture capital exposure, and the chance to win up to $1 million in seed funding at global finals. Even teams that don’t win the final prize gain visibility and often attract support from accelerators, NGOs, angel investors, and startup support organizations operating across Africa and beyond.",
    svg: ChartUp(),
    tag: "funding",
    imgSrc: financial_growth_image,
    block: "landscape two",
  },
  {
    title: "Leadership, confidence & professional skills",
    subHeading: "Level up personally - not just professionally",
    textContent:
      "Hult Prize Nigeria challenges you to grow into a confident leader, a persuasive communicator, and a problem solver with real-world impact skills. You’ll learn how to pitch, negotiate, present, lead teams, and think like an entrepreneur. Whether you want a job, a business, or a career abroad — you’ll walk away stronger, sharper, and more confident.",
    svg: Confidence(),
    tag: "growth",
  },
  {
    title: "Agent of social change in Nigeria",
    subHeading: "Solve Nigeria's probelms while building wealth",
    textContent:
      "Hult Prize Nigeria empowers Nigerian youth to build businesses that address critical issues like unemployment, food insecurity, education gaps, poverty, clean energy, and healthcare. You don’t just watch the news — you build solutions. You don’t wait for change — you lead it.",
    svg: HandLove(),
    tag: "impact",
  },
  {
    title: "Career boost and industry recognition",
    subHeading: "stand out among Nigerian graduates and job seekers",
    textContent: `Hult Prize alumni are recognized nationally and internationally for leadership, innovation and creativity. Being part of Hult Prize Nigeria strengthens your CV, boosts your LinkedIn profile, and proves that you can execute ideas — not just talk.You don’t just graduate.
    You graduate with experience.`,
    svg: Certificate(),
    tag: "career",
    imgSrc: rocket_image,
    block: "portrait",
  },
];

export const winnersSelection: string[] = [
  "Clear Problem and solution",
  "large and urgent market",
  "sustainable business model",
  "unique innovation",
  "real impact potential",
  "strong team chemistry",
  "scalability",
  "ethical operations",
  "feasible execution",
];

export const preparationTips: string[] = [
  "reasearch your problem deeply",
  "talk to real users",
  "validate your assumptions",
  "build simple prototypes early",
  "train your pitching skills",
  "learn from feedback",
  "focus on impact and sustainability",
  "work consistently as a team",
  "tell a compelling story",
];

export const ctaList: string[] = [
  "Register Your Team",
  "Build Your Idea",
  "Pitch Your Vision",
  "Compete Nationally",
  "Represent Nigeria",
  "Change The World",
];
