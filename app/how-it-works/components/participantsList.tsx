import Image, { StaticImageData } from "next/image";

const ParticipantsList = ({
  text,
  imageSrc,
}: {
  text: string;
  imageSrc: StaticImageData;
}) => {
  return (
    <li className="flex gap-4 items-center px-8 py-5 border-[rgb(64,64,144)] border-[1.5px] shadow-xl hover:shadow-2xl hover:translate-y-[-5px] hover:border-pink duration-300 ease-in-out rounded-lg">
      <Image
        src={imageSrc}
        alt="orb"
        aria-hidden="true"
        className="w-10 object-contain"
      />
      <p className="font-body text-[#6060af] text-body max-w-[45ch] text-pretty">
        {text}
      </p>
    </li>
  );
};

export { ParticipantsList };
