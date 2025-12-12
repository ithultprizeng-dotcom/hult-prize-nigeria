import { hultPrizeNigeriaBenefits } from "../constants";
import { PortraitBlock } from "./portraitBlock";
import { SquareLayout } from "./squareLayout";
import { LandscapeLayout } from "./landscapeLayout";
export function BenefitsGrid() {
  return (
    <section className="grid grid-cols-3 grid-rows-[repeat(3,minmax(300px,auto))] *:bg-[#f0f0f0] gap-2.5 *:rounded-2xl *:hover:bg-[#ec208833] *:even:hover:bg-[#06b47a40] *:duration-300">
      {hultPrizeNigeriaBenefits.map(
        (
          { block, tag, textContent, subHeading, title, imgSrc, svg },
          index: number
        ) =>
          block === "portrait" ? (
            <article className="row-start-1 row-span-2" key={index}>
              <PortraitBlock
                tag={tag}
                textContent={textContent}
                subHeading={subHeading}
                title={title}
                imgSrc={imgSrc}
                svg={svg}
              />
            </article>
          ) : block === "landscape one" ? (
            <article
              className="row-start-2 row-span-1 col-start-2 col-span-2"
              key={index}
            >
              <LandscapeLayout
                tag={tag}
                textContent={textContent}
                subHeading={subHeading}
                title={title}
                imgSrc={imgSrc}
                svg={svg}
              />
            </article>
          ) : block === "landscape two" ? (
            <article
              className="row-start-3 row-span-1 col-start-1 col-span-2"
              key={index}
            >
              <LandscapeLayout
                tag={tag}
                textContent={textContent}
                subHeading={subHeading}
                title={title}
                imgSrc={imgSrc}
                svg={svg}
              />
            </article>
          ) : (
            <SquareLayout
              key={index}
              tag={tag}
              textContent={textContent}
              subHeading={subHeading}
              title={title}
              svg={svg}
            />
          )
      )}
    </section>
  );
}
