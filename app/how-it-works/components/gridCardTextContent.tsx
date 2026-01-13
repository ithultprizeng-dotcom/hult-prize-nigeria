export function GridCardContent({
  title,
  subHeading,
  textContent,
}: {
  title: string;
  subHeading: string;
  textContent: string;
}) {
  return (
    <article className="flex flex-col gap-4 mt-auto">
      <div className="flex flex-col gap-1">
        <h3 className="font-body font-bold text-aloe text-3xl tracking-[1.3px] capitalize">
          {title}
        </h3>
        <p className="font-body text-body leading-[1.5] [word-spacing:1.5px] max-w-[50ch] text-pretty capitalize text-[#60609a] font-semibold">
          {subHeading}
        </p>
      </div>
      <p className="font-body text-[#808080] text-body leading-[1.5] max-w-[50ch] text-pretty [word-spacing:1.5px]">
        {textContent}
      </p>
    </article>
  );
}
