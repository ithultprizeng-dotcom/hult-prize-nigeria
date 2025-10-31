import center_image from "../../public/images/image11.jpg";
import image_one from "../../public/images/image.jpg";
import image_two from "../../public/images/image0.jpg";
import image_three from "../../public/images/image1.jpg";
import image_four from "../../public/images/image2.jpg";
import image_five from "../../public/images/image3.jpg";
import image_six from "../../public/images/image4.jpg";
import image_seven from "../../public/images/image5.jpg";
import image_eight from "../../public/images/image6.jpg";
import image_nine from "../../public/images/image7.jpg";
import image_ten from "../../public/images/image8.jpg";
import image_eleven from "../../public/images/image9.jpg";
import image_twelve from "../../public/images/image10.jpg";
import image_thirteen from "../../public/images/image12.jpg";
import image_fourteen from "../../public/images/image13.jpg";
import image_fifteen from "../../public/images/image14.png";
import image_sixteen from "../../public/images/image15.png";
import institution_icon from "../../public/images/institution-icon.png";
import startup_icon from "../../public/images/startup-icon.png";
import student_icon from "../../public/images/student-icon.png";
import winner_icon from "../../public/images/winner-icon.png";
import { type StaticImageData } from "next/image";

export interface NavlinksType {
  href: string;
  title: string;
}

export const NAVLINKS: NavlinksType[] = [
  { href: "competition", title: "the competition" },
  { href: "how-it-works", title: "how it works" },
  { href: "get-involved", title: "get involved" },
  { href: "hult-prize-winners", title: "winners + finalists" },
  { href: "about-hult-prize", title: "about us" },
];

export const IMAGES: { [key: string]: StaticImageData } = {
  center_image,
  image_one,
  image_two,
  image_three,
  image_four,
  image_five,
  image_six,
  image_seven,
  image_eight,
  image_nine,
  image_ten,
  image_eleven,
  image_twelve,
  image_thirteen,
  image_fourteen,
  image_fifteen,
  image_sixteen,
};

export interface Intro_Stat {
  figure: string | number;
  caption: string;
  imageSrc: StaticImageData;
}

export const INTRO_STATS: Intro_Stat[] = [
  {
    figure: "40+",
    caption: "participating institutions",
    imageSrc: institution_icon,
  },
  { figure: "200+", caption: "student startups", imageSrc: startup_icon },
  { figure: "1000+", caption: "student enterpreneurs", imageSrc: student_icon },
  { figure: 1, caption: "national winner", imageSrc: winner_icon },
];

export interface FeaturesContentType {
  feature_title: string;
  feature_tagline: string;
  feature_content: string;
  feature_image: StaticImageData;
}

export const FEATURES_CONTENT: FeaturesContentType[] = [
  {
    feature_title: "Mentorship and Network",
    feature_tagline: "World Class mentorship",
    feature_content:
      "Gain direct access to Nigeria's top entrepreneurs, CEOs, and social innovators. Build critical relationships that will fast-track your venture from a campus concept to a market-ready company.",
    feature_image: image_five,
  },
  {
    feature_title: "Seed funding and investment",
    feature_tagline: "Launch your enterprise",
    feature_content:
      "Compete directly for the $1 Million global seed investment and significant local funding opportunities. This is your chance to secure the capital required to turn your purpose-driven idea into a profit-making reality.",
    feature_image: image_seven,
  },
  {
    feature_title: "global reach and impact",
    feature_tagline: "Beyond the Campus",
    feature_content:
      "Compete directly for the $1 Million global seed investment and significant local funding opportunities. This is your chance to secure the capital required to turn your purpose-driven idea into a profit-making reality.",
    feature_image: image_nine,
  },
];

export const maskImages: string[] = [
  "/images/mask_image.svg",
  "/images/brushstroke.png.png",
  "/images/mask-bg.png",
];

interface InnovativeIdeasTypes {
  category: string;
  focusArea: string;
  description: string;
}

export const INNOVATIVE_IDEAS_CONTENT: InnovativeIdeasTypes[] = [
  {
    category: "agriTech",
    focusArea: " Precision Agriculture",
    description: "Optimizating yields via data",
  },
  {
    category: "agriTech",
    focusArea: " Cold Chain Logistics",
    description: "Reducing Post-Harvest Loss",
  },
  {
    category: "education",
    focusArea: "Vocational Skill Platforms",
    description: "Bridging the skills gap",
  },
  {
    category: "education",
    focusArea: "Local Language Learning ",
    description: "Digital tools for indigenous languages",
  },
  {
    category: "energy",
    focusArea: "Off-Grid Solar Solutions",
    description: "Powering unconnected communities",
  },
  {
    category: "environment",
    focusArea: "Waste-to-Wealth",
    description: "Recycling and upcycling solutions",
  },
  {
    category: "environment",
    focusArea: "Water Quality Monitoring",
    description: "Accessible testing and purification",
  },
  {
    category: "finTech",
    focusArea: "Micro-Lending for SMEs",
    description: "Access to capital",
  },
  {
    category: "healthTech",
    focusArea: "Telemedicine for Rural Areas",
    description: "Remote Diagnostics",
  },
  {
    category: "healthTech",
    focusArea: "Drug Authenticity Tech",
    description: "Combatting counterfeit medicine",
  },
  {
    category: "civicTech",
    focusArea: "Digital ID Verification",
    description: "Secure, accessible identity",
  },
  {
    category: "logistics",
    focusArea: "Last-Mile Delivery Solutions",
    description: "Efficient urban and inter-state delivery",
  },
  {
    category: "logistics",
    focusArea: "Public Transit Mapping",
    description: "Real-Time tracking and routing for buses/keke",
  },
  {
    category: "housing",
    focusArea: "Affordable Housing Tech",
    description: "Sustainable and low cost housing, easier renting",
  },
  {
    category: "creative economy",
    focusArea: "Digital Arts Marketplace",
    description: "Monetizing local creative content",
  },
];

export interface BlogCardType {
  imageSrc: string;
  title: string;
  contentFullText?: string;
  author: string;
}

export const BlogPosts: BlogCardType[] = [
  {
    imageSrc: "/images/image9.jpg",
    title:
      "Why Hult Prize Nigeria is the Epicenter of the Next World-Changing Movement",
    author: "Joshua T. Berglan",
    contentFullText: `***There are moments in history that define a generation. Pivotal shifts where vision, opportunity, and raw human potential collide to create something extraordinary. I believe we are standing at the precipice of such a moment, and its epicenter is not where the world might expect. It's in Nigeria.***

My name is Joshua T. Berglan, and I have dedicated my life to building platforms for voices that need to be heard. It's why I am incredibly honored and energized to announce that I have joined the Board of Governance for Hult Prize Nigeria. This isn't just another board seat; it's a commitment to a mission I believe will redefine social impact—a mission to empower the brilliant minds of Nigeria to build businesses that solve the world's most pressing challenges.

##The Power of Proximity: Why Nigeria?
For too long, the narrative around solving global crises has been dominated by external perspectives. Yet, groundbreaking research consistently shows that the most effective and sustainable solutions emerge from those who live the problems daily. A study on social entrepreneurship emphasizes that local innovators possess "contextual intelligence" that is critical for creating interventions that actually work ( Zahra, S. A., et al., 2009 ).

Nigeria is a nation bursting with this exact potential. It is home to the largest youth population in Africa, a demographic that is digitally native, resilient, and hungry for change. The challenges here are complex—from energy access and food security to healthcare logistics—but within these challenges lie the seeds of world-changing innovation. This isn't about charity; it's about investment in a generation poised to build the future.

##More Than a Competition: Building an Ecosystem
The Hult Prize , often called the "Nobel Prize for students," has a proven model for sparking student-led social enterprise. But our vision for Hult Prize Nigeria goes beyond the $1 million grand prize. We are building a self-sustaining ecosystem designed to nurture ideas from conception to global scale.

Our strategy is threefold:

--Democratize Access to Opportunity: We're reaching into every corner of the nation, engaging with universities and communities to ensure that the best ideas, regardless of their origin, have a platform. University-based competitions are powerful catalysts for transforming student mindsets from job-seekers to job-creators ( Balan, C., & Vasile, D., 2015 ).
--World-Class Mentorship and Training: An idea is only as strong as the team behind it. We are mobilizing a network of Nigerian and international leaders, entrepreneurs, and experts—people who have built, scaled, and succeeded—to provide hands-on mentorship. This is about transferring practical knowledge, not just theoretical advice.
--Bridge to Capital and Markets: We will actively connect our most promising ventures with the investment and resources they need to thrive. We are creating a pipeline that takes raw Nigerian ingenuity and refines it into investment-ready social enterprises with the potential for exponential impact.
##This Is Our Call to Action
The work ahead is immense, but our conviction is unshakeable. Nigeria's future will not be dictated by its challenges, but defined by the innovators who rise to solve them. And in doing so, they will create blueprints for the rest of the world.

This is a call to every student in Nigeria with a disruptive idea. It's a call to every university leader to champion this movement on your campus. It's a call to every business leader and investor to join us as mentors and partners. And it's a call to the world to watch what happens here.

The next chapter of global innovation is being written. Join us and be a part of the story.

***Follow our journey and get involved:***

+++Connect on LinkedIn(https://www.linkedin.com/company/hult-prize-nigeria)+++
+++Like us on Facebook(https://www.facebook.com/hultprizeng/)+++
Learn more about our work at +++joshuatberglan.com/hult-prize-nigeria(https://www.joshuatberglan.com/hult-prize-nigeria)+++

`,
  },
  {
    imageSrc: "/images/image3.jpg",
    title: "The need for innovation in the Nigerian Tech Space",
    author: "Damian Nwoke",
    contentFullText: `
    #The need for innovation in the Nigerian TEch Space
    Proident do occaecat ipsum excepteur incididunt enim. Ullamco dolor adipisicing magna amet aliquip. Pariatur reprehenderit non excepteur eu incididunt.
    Laborum tempor adipisicing anim dolor voluptate occaecat quis aliqua adipisicing. Ut ut dolor ea quis nulla reprehenderit ipsum exercitation laboris elit exercitation est. Pariatur enim velit est esse dolor aute sunt eu veniam. Sunt aliqua occaecat ad mollit id est.
    Officia nisi ipsum laborum aliqua amet elit sit. Excepteur esse voluptate ea occaecat duis irure do. Minim et pariatur ea officia aliquip quis cupidatat eiusmod magna quis. 
    Aute labore officia culpa ex anim eu cupidatat est incididunt elit ipsum elit ad esse. Sint irure culpa elit cupidatat do. Reprehenderit pariatur tempor mollit deserunt ea. Dolore dolor duis ex est ad non veniam.
    Esse nostrud in ut eu est Lorem. Nisi nisi nostrud ea in in mollit dolore elit est id irure. Velit non sunt pariatur elit. Culpa do laboris est et culpa ea occaecat eiusmod laborum do nulla est ad nostrud. In ad officia fugiat sint eu ea dolor. Veniam dolore eiusmod minim exercitation adipisicing ea do elit cupidatat excepteur.`,
  },
  {
    imageSrc: "/images/image.jpg",
    title: "Creating new spaces for emerging talent in the tech landscape",
    author: "Angel Kingsley",
    contentFullText: `
    #The need for innovation in the Nigerian TEch Space
    Proident do occaecat ipsum excepteur incididunt enim. Ullamco dolor adipisicing magna amet aliquip. Pariatur reprehenderit non excepteur eu incididunt.
    Laborum tempor adipisicing anim dolor voluptate occaecat quis aliqua adipisicing. Ut ut dolor ea quis nulla reprehenderit ipsum exercitation laboris elit exercitation est. Pariatur enim velit est esse dolor aute sunt eu veniam. Sunt aliqua occaecat ad mollit id est.
    Officia nisi ipsum laborum aliqua amet elit sit. Excepteur esse voluptate ea occaecat duis irure do. Minim et pariatur ea officia aliquip quis cupidatat eiusmod magna quis. 
    Aute labore officia culpa ex anim eu cupidatat est incididunt elit ipsum elit ad esse. Sint irure culpa elit cupidatat do. Reprehenderit pariatur tempor mollit deserunt ea. Dolore dolor duis ex est ad non veniam.
    Esse nostrud in ut eu est Lorem. Nisi nisi nostrud ea in in mollit dolore elit est id irure. Velit non sunt pariatur elit. Culpa do laboris est et culpa ea occaecat eiusmod laborum do nulla est ad nostrud. In ad officia fugiat sint eu ea dolor. Veniam dolore eiusmod minim exercitation adipisicing ea do elit cupidatat excepteur.`,
  },
  {
    imageSrc: "/images/image10.jpg",
    title: "Generating Start-up Ideas for global impact",
    author: "Olufemi Amadi",
    contentFullText: `
    #The need for innovation in the Nigerian TEch Space
    Proident do occaecat ipsum excepteur incididunt enim. Ullamco dolor adipisicing magna amet aliquip. Pariatur reprehenderit non excepteur eu incididunt.
    Laborum tempor adipisicing anim dolor voluptate occaecat quis aliqua adipisicing. Ut ut dolor ea quis nulla reprehenderit ipsum exercitation laboris elit exercitation est. Pariatur enim velit est esse dolor aute sunt eu veniam. Sunt aliqua occaecat ad mollit id est.
    Officia nisi ipsum laborum aliqua amet elit sit. Excepteur esse voluptate ea occaecat duis irure do. Minim et pariatur ea officia aliquip quis cupidatat eiusmod magna quis. 
    Aute labore officia culpa ex anim eu cupidatat est incididunt elit ipsum elit ad esse. Sint irure culpa elit cupidatat do. Reprehenderit pariatur tempor mollit deserunt ea. Dolore dolor duis ex est ad non veniam.
    Esse nostrud in ut eu est Lorem. Nisi nisi nostrud ea in in mollit dolore elit est id irure. Velit non sunt pariatur elit. Culpa do laboris est et culpa ea occaecat eiusmod laborum do nulla est ad nostrud. In ad officia fugiat sint eu ea dolor. Veniam dolore eiusmod minim exercitation adipisicing ea do elit cupidatat excepteur.`,
  },
  {
    imageSrc: "/images/image14.png",
    title: "How to adapt to the ever-changing global tech space",
    author: "Damian Nwoke",
    contentFullText: `
    #The need for innovation in the Nigerian TEch Space
    Proident do occaecat ipsum excepteur incididunt enim. Ullamco dolor adipisicing magna amet aliquip. Pariatur reprehenderit non excepteur eu incididunt.
    Laborum tempor adipisicing anim dolor voluptate occaecat quis aliqua adipisicing. Ut ut dolor ea quis nulla reprehenderit ipsum exercitation laboris elit exercitation est. Pariatur enim velit est esse dolor aute sunt eu veniam. Sunt aliqua occaecat ad mollit id est.
    Officia nisi ipsum laborum aliqua amet elit sit. Excepteur esse voluptate ea occaecat duis irure do. Minim et pariatur ea officia aliquip quis cupidatat eiusmod magna quis. 
    Aute labore officia culpa ex anim eu cupidatat est incididunt elit ipsum elit ad esse. Sint irure culpa elit cupidatat do. Reprehenderit pariatur tempor mollit deserunt ea. Dolore dolor duis ex est ad non veniam.
    Esse nostrud in ut eu est Lorem. Nisi nisi nostrud ea in in mollit dolore elit est id irure. Velit non sunt pariatur elit. Culpa do laboris est et culpa ea occaecat eiusmod laborum do nulla est ad nostrud. In ad officia fugiat sint eu ea dolor. Veniam dolore eiusmod minim exercitation adipisicing ea do elit cupidatat excepteur.`,
  },
];

export function turnMarkedUpTextIntoStructuredHTML(
  textContent: string
): string {
  const textLines = textContent.split(/\r?\n|\r/).filter((line) => line != "");
  const result = textLines.reduce((compiled, eachLine, index) => {
    if (eachLine.startsWith("#")) {
      const cleanedUpLine = cleanMarkup("#", eachLine);
      compiled += `<h2>${cleanedUpLine}</h2>`;
      return compiled;
    } else if (eachLine.startsWith("--")) {
      if (textLines[index - 1] && !textLines[index - 1].startsWith("--"))
        compiled += `<ol>`;
      const cleanedUpLine = cleanMarkup("--", eachLine);
      compiled += `<li>${cleanedUpLine}</li>`;
      if (textLines[index + 1] && !textLines[index + 1].startsWith("--"))
        compiled += `</ol>`;
      return compiled;
    } else if (eachLine.startsWith("-")) {
      if (textLines[index - 1] && !textLines[index - 1].startsWith("-"))
        compiled += `<ul>`;

      const cleanedUpLine = cleanMarkup("-", eachLine);
      compiled += `<li>${cleanedUpLine}</li>`;
      if (textLines[index + 1] && !textLines[index + 1].startsWith("-"))
        compiled += `</ul>`;
      return compiled;
    } else if (eachLine.startsWith("##")) {
      const cleanedUpLine = cleanMarkup("##", eachLine);
      compiled += `<h3>${cleanedUpLine}</h3>`;
      return compiled;
    } else if (eachLine.includes("***")) {
      const lineText = eachLine;
      const processedText = extractBoundedText("***", lineText);
      const boldTextInTag = `<strong>${processedText.cleanedUpBoldText}</strong>`;
      const newLine = lineText.replace(processedText.boldText, boldTextInTag);
      compiled += newLine;
      return compiled;
    } else if (eachLine.includes("+++")) {
      const lineText = eachLine;
      const { boldText, cleanedUpBoldText } = extractBoundedText(
        "+++",
        lineText
      );
      const startOfParentheses = cleanedUpBoldText.indexOf("(");
      const endOfParentheses = cleanedUpBoldText.lastIndexOf(")");
      const hyperReference = cleanedUpBoldText.slice(
        startOfParentheses + 1,
        endOfParentheses
      );
      const plainTextWithoutParentheses = cleanedUpBoldText.slice(
        0,
        startOfParentheses
      );
      const linkElement = `<a href='${hyperReference}'>${plainTextWithoutParentheses}</a>`;
      const newLine = lineText.replace(boldText, linkElement);
      compiled += newLine;
      return compiled;
    } else {
      compiled += `<p>${eachLine}</p>`;
      return compiled;
    }
  }, "");
  return result;
}

function extractBoundedText(
  symbol: string,
  text: string
): { boldText: string; cleanedUpBoldText: string } {
  const lineText = text;
  const startIndex = lineText.indexOf(symbol);
  const endIndex = lineText.lastIndexOf(symbol);
  const boldText = lineText.slice(startIndex, endIndex + 3);
  const cleanedUpBoldText = cleanMarkup(symbol, boldText);
  return { boldText, cleanedUpBoldText };
}

function cleanMarkup(symbol: string, text: string) {
  const cleanedUpBoldText = text.replaceAll(symbol, "").trim();
  return cleanedUpBoldText;
}
