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
import { ReactElement } from "react";
import { PrecisionFarmingSolution } from "../components/ui/SvgIcons";

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
