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
