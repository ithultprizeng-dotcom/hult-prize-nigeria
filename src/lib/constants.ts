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
  // { href: "competition", title: "the competition" },
  // { href: "how-it-works", title: "how it works" },
  // { href: "get-involved", title: "get involved" },
  // { href: "hult-prize-winners", title: "winners + finalists" },
  // { href: "about-hult-prize", title: "about us" },
  { href: "/team", title: "our team" },
  { href: "/#blogs", title: "blogs" },
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
  rotateValue: number;
}

export const INTRO_STATS: Intro_Stat[] = [
  {
    figure: "40+",
    caption: "participating institutions",
    imageSrc: institution_icon,
    rotateValue: 2,
  },
  {
    figure: "200+",
    caption: "student startups",
    imageSrc: startup_icon,
    rotateValue: -5,
  },
  {
    figure: "1000+",
    caption: "student enterpreneurs",
    imageSrc: student_icon,
    rotateValue: 6,
  },
  {
    figure: 1,
    caption: "national winner",
    imageSrc: winner_icon,
    rotateValue: -2,
  },
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
  id: string;
  imageSrc: string;
  title: string;
  contentFullText?: string;
  author: string;
}

export const BlogPosts: BlogCardType[] = [
  {
    id: "001",
    imageSrc: "/images/epicenter.webp",
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
    id: "002",
    imageSrc: "/images/pillars.webp",
    title: "Decoding the Three Pillars: People, Planet, Profit Image",
    author: "Damian Nwoke",
    contentFullText: `
***The Hult Prize is built on a foundation of triple-bottom-line impact.*** 
Understanding these three pillars is the first step toward crafting a winning venture. This isn't just about charity; it's about building scalable businesses that inherently do good.

##What Does 'For Profit' Truly Mean?

It means your solution must be financially sustainable. We look for models that can generate revenue, cover operating costs, and scale independently.

---Your revenue streams are clear.

---Your pricing model works in the target market.

---You have a path to massive scale without continuous reliance on grants.

##The Social Mandate: For People

This pillar ensures your business tackles a major social challenge in Nigeria, from education to financial inclusion.

-- Access to clean water technologies.
-- Creation of quality, sustainable jobs.
-- Delivery of essential services to underserved communities.

Responsibility: For the Planet

We champion environmental stewardship. Your business must actively reduce its footprint or contribute to environmental regeneration. Think circular economy and waste-to-wealth models.

Your Challenge

How can you blend these three mandates into a single, compelling business pitch?
`,
  },
  {
    id: "003",
    imageSrc: "/images/agritech.jpg",
    title: "AgriTech: The Digital Farm Revolution in Nigeria",
    author: "Angel Kingsley",
    contentFullText: `

Agriculture remains the backbone of Nigeria’s economy, employing a significant portion of the population and contributing heavily to the national GDP. However, the sector is plagued by systemic challenges: low yields, massive post-harvest losses, limited access to finance, and climate change vulnerability.

This is where AgriTech steps in, offering the most exciting and impactful frontier for social entrepreneurship in Nigeria today. AgriTech is the convergence of digital technology, mobile connectivity, and agricultural science, creating a revolution that bypasses traditional infrastructural deficits. For Hult Prize teams, AgriTech offers a golden opportunity to build ventures that deliver both high social impact (SDG 2: Zero Hunger) and high-growth potential.

##Three Pillars of Disruption

Successful AgriTech ventures in Nigeria tend to focus on solving three critical pain points:

***Financial Inclusion and Credit Scoring***

The average Nigerian smallholder farmer is credit-invisible. FinTech innovations within AgriTech are changing this by using farmers' data—such as harvest history, land size via GPS, and input usage—to create verifiable digital credit scores. This allows startups to offer tailored financing, insurance products, and access to quality inputs without requiring traditional collateral.

***Supply Chain Efficiency (The Post-Harvest Problem)***

It is estimated that up to 40% of produce spoils before reaching the consumer, representing billions of dollars in lost revenue and wasted resources. Solutions focusing on Cold Chain Logistics, Warehouse Optimization, and Farm-to-Market Digital Linkages are urgently needed. Ventures focused on efficient aggregation, transport, and storage using technology (like IoT sensors and mobile tracking) can drastically reduce this loss.

***Precision Farming and Information Access***

Most farming practices in Nigeria are rain-fed and traditional. Precision agriculture uses data science, satellite imagery, and mobile apps to provide farmers with localized, timely information. This includes weather alerts, personalized fertilizer recommendations, pest and disease diagnostics, and optimal planting/harvesting dates. Providing this decision-making power directly translates to higher, more resilient yields.

##The Investment Imperative: Why AgriTech is the Next Unicorn Frontier

To truly understand the importance of AgriTech for your Hult Prize venture, you must grasp the sheer scale of the Nigerian market and the critical need for investment—the "pad" of opportunity.

##Market Size and Growth Potential

Nigeria is home to over 84 million hectares of arable land, yet only about 40% is currently cultivated. The population is projected to exceed 400 million by 2050, placing immense pressure on the food supply system. This isn't just a social challenge; it's a massive, guaranteed market.

--***Massive Smallholder Base:*** Your primary customer base consists of approximately 30 million smallholder farmers. Even a low-cost, high-value subscription service to just 10% of this population represents a multi-million-dollar annual recurring revenue (ARR) opportunity.

--***Government and Institutional Support:*** Given the national dependence on imported food and the need for economic diversification, the Nigerian government and international development banks prioritize investment in food security, creating favorable regulatory and funding environments for scalable AgriTech solutions.

--***The Data Economy:*** Every farm operation digitized creates valuable data—from soil health to consumption patterns. The business of selling and optimizing this aggregated data for corporate buyers, large food processors, and financial institutions offers a highly scalable, non-linear revenue stream beyond the farm gate.

##Strategic Investment Hotspots

For Hult Prize teams looking to attract the $1 million seed fund and subsequent follow-on capital, focus your solution on these high-leverage areas:

---***Renewable Energy Integration:*** Combining solar power and battery storage with irrigation systems (solar-powered boreholes) to eliminate dependence on expensive, polluting diesel generators. This taps into both the AgriTech and Clean Energy markets (SDG 7).

---***The Circular Economy:*** Designing ventures around waste-to-wealth models, such as converting agricultural waste (like cassava peel or rice husks) into high-value animal feed, biomass energy, or organic fertilizers. This addresses SDG 12: Responsible Consumption and Production by creating new economic value from waste.

---***Skill Digitization:*** Creating interactive, mobile-first training modules for young, educated Nigerians to enter modern agriculture. By standardizing best practices and certifying new AgriTech workers, you build a sustainable workforce for your own venture and the entire sector.

The revolution is not coming; it is already here. AgriTech is the intersection where Nigeria's biggest problems meet its biggest market opportunities. Your team’s challenge is to build the scalable, profitable model that captures this value.`,
  },
  {
    id: "004",
    imageSrc: "/images/cashflow.webp",
    title: "From Concept to Cashflow: Startup Budgeting for Hult Competitors",
    author: "Olufemi Amadi",
    contentFullText: `

Your brilliant idea, aligned with the UN Sustainable Development Goals (SDGs), is the engine of your Hult Prize venture. But the business model and budget are the fuel and the transmission. Without a credible, rigorous financial plan, even the most impactful social solution will fail to secure the $1 million seed fund.

Judges are looking for more than passion; they are looking for a financially sustainable blueprint. This guide breaks down how to build a robust startup budget that will take your venture from a campus concept to investment-ready status.

##1. The Three Pillars of Your Financial Model

Every Hult team needs to clearly delineate these three cost categories:

***A. Cost of Service (COS) / Cost of Goods Sold (COGS)***

This represents the direct, variable costs associated with delivering your product or service to a single customer. You must show that your Gross Margin is positive (Revenue > COS).

Examples: Raw materials (for a product), transactional fees, direct labor involved in manufacturing or service delivery, or hosting costs (for a tech solution).

The Goal: Prove that your business is scalable and profitable on a unit-by-unit basis.

***B. Operating Expenses (OpEx)***

These are the fixed or semi-variable costs required to run the business, regardless of how many customers you serve.

Examples: Salaries (management/admin), rent, utilities, marketing/sales expenses, software subscriptions (CRM, accounting), and travel expenses.

The Goal: Keep OpEx lean in the early stages (Year 1) to maximize your runway.

***C. Capital Expenditure (CapEx)***

These are large, one-time investments in fixed assets that provide long-term benefit, typically depreciating over many years.

Examples: Purchase of equipment (machinery, vehicles, major tech infrastructure), land, or buildings.

The Goal: Justify CapEx with clear return-on-investment (ROI) analysis, showing how the asset purchase enables future revenue growth or significant cost reduction.

##2. Managing Your Runway: Burn Rate and Breakeven

Investors fund runway, not just ideas. Your pitch must clearly articulate how long your $1 million investment will last before you hit profitability.

##What is Burn Rate?

Your Net Burn Rate is the rate at which your company loses money, calculated as

If your OpEx is $50,000 per month and your revenue is $10,000 per month, your Net Burn is $40,000 per month. If you receive the $1 million Hult Prize, your runway is: 25 months

You must show a plan to reach Breakeven (where revenue equals OpEx) well before the end of your runway, ideally within 18–24 months.

##Critical Budgeting Pitfalls to Avoid

Hult judges are experts at spotting common startup mistakes. Ensure your budget avoids these traps:

--***Underestimating Salaries:*** Do not assume founders or key employees will work for free indefinitely. Include competitive salaries for Year 2/3 projections to show sustainability.

--*** Customer Acquisition Cost (CAC):*** Marketing and sales are expensive. Your budget must allocate realistic funds for acquiring customers, especially in Nigeria's competitive market. CAC often makes or breaks early growth projections.

--***No Buffer/Contingency:*** Things will go wrong. Build a contingency budget (typically 10-15% of total OpEx) to cover unforeseen costs like regulatory changes, supply chain disruptions, or technical failures.

--***Scaling Too Quickly:*** Show phased scaling. Your Year 1 budget should be lean and focused on pilot validation, not immediate national expansion.

##3. Valuing Social Impact in Financial Terms

The "social" aspect of your enterprise must translate into quantifiable financial language, justifying premium pricing or securing grants.

##Measuring the Social ROI (SROI)

Don't just state you are "helping people." Quantify the financial value you are creating for your customers or beneficiaries:

---***If you address Zero Hunger (SDG 2):*** Calculate the monetary value of increased yield or reduced post-harvest loss for a farmer. Example: Our solution increases farmer income by an average of $200 per year per beneficiary.

---***If you address Quality Education (SDG 4):*** Calculate the economic value of higher future earnings for graduates who use your platform. Example: Graduates using our platform see a 15% increase in starting salary, valued at $X million community-wide.

---***If you address Climate Action (SDG 13):*** Calculate the cost savings associated with carbon reduction or waste diversion. Example: Our recycling process saves local government $50,000 annually in landfill fees.

By incorporating this detailed, extended financial planning into your Hult Prize pitch, you demonstrate not only a heart for impact but also the fiscal discipline required to build a sustainable, million-dollar enterprise.`,
  },
  {
    id: "005",
    imageSrc: "/images/mentor.jpg",
    title: "The Unfair Advantage: Why Mentorship Will Make or Break Your Team",
    author: "Damian Nwoke",
    contentFullText: `
    In the high-stakes world of the Hult Prize, every team is smart, passionate, and driven. So, what truly separates a finalist from a brilliant idea that fizzles out? It’s often the quality of their guidance. Your team’s ultimate unfair advantage isn't just your innovation; it’s the experienced perspective provided by a dedicated mentor. This is the difference between academic theory and real-world viability.

##Bridging the Knowledge Gap: Why Mentors Are Essential

As students, you possess boundless energy and fresh ideas, but experience is the one resource you cannot create overnight. A mentor provides the institutional knowledge and market context that shortcut your learning curve.

***Avoiding Fatal Flaws***

The Hult Prize challenge requires building a sustainable, for-profit social enterprise. A mentor helps you identify and mitigate the common pitfalls that sink early-stage ventures in the Nigerian ecosystem:

--***Market Validation:*** You might think a solution is needed, but a mentor knows if people will truly pay for it. They challenge assumptions before you invest precious time.

--***Regulatory Hurdles:*** Navigating Nigeria’s specific business, tax, and licensing environment can be complex. A mentor provides practical advice on compliance and legal structures.

--***Scalability Traps:*** They help you design a business model that works for 10 users and can scale up to 10 million users, ensuring it remains profitable and impactful at every level.

##The Mentor’s Role: More Than Just Advice

A mentor is not simply an advisor; they are an accountability partner, a network gateway, and an emotional sounding board.

---They provide objective feedback on your pitch deck and financial models.

---They introduce you to potential early-adopter customers or key industry stakeholders.

---They hold your team accountable for milestones, forcing you to prioritize effectively.

---They offer emotional support, helping your team manage conflict and stay motivated during inevitable setbacks.

##Finding Your Champion: 3 Criteria for a Great Hult Mentor

Don't just seek out the biggest name; seek out the right fit. A Hult Prize mentor must align with the competition's core mission: People, Planet, Profit.

--***Relevant Experience in the Triple Bottom Line***: Your mentor must have experience in building a business that successfully blends profit with social or environmental impact. A purely charitable background or a purely traditional business background is often insufficient.

--***Sector Specificity***: If your focus is AgriTech, your mentor should understand the challenges of the Nigerian agricultural supply chain, from farm to market. Sector knowledge is critical for credible validation.

--***Commitment and Chemistry***: Look for someone who is genuinely passionate about your idea and committed to meeting regularly. The relationship must be built on mutual respect and shared enthusiasm.

##Making the Most of the Relationship

Once you secure a mentor, treat their time as your most valuable asset.

Always come prepared with a clear agenda and specific questions.

Provide them with updates before the meeting so time can be spent on discussion, not catching up.

Be open to critical feedback. Your mentor’s job is to tell you what you need to hear, not what you want to hear.

Mentorship transforms a good idea into a viable business. Don’t start your Hult Prize journey without securing this vital, unfair advantage.

`,
  },
  {
    id: "006",
    imageSrc: "/images/hero.jpg",
    title:
      "The SDG Playbook: How to Build Your $1M Venture Around a Single Global Goal",
    author: "Hult Prize Nigeria Community",
    contentFullText: `

The Hult Prize is not just about having a great idea; it’s about having a ***validated, scalable, and targeted social enterprise.*** The 17 UN Sustainable Development Goals (SDGs) are your definitive playbook, your blueprint for building a venture that is inherently impactful. This approach moves you beyond vague altruism to focused, measurable business design.

##Why Focus on One SDG is Your Greatest Asset

Many teams make the mistake of trying to solve half a dozen SDGs at once, diluting their focus and confusing their value proposition. The most successful Hult Prize ventures anchor themselves to ***one primary SDG*** and demonstrate deep, scalable impact within that area.

For example, tackling SDG 4 (Quality Education) might lead to a vocational skills platform, while tackling SDG 7 (Affordable and Clean Energy) might lead to an off-grid solar solution.

Here is a roadmap for choosing your primary focus:

---***Passion and Expertise:*** Which SDG problem are you and your team most passionate about, and what unique knowledge do you possess to solve it?

---***Local Relevance:*** Which SDG challenge is most acute in your local Nigerian community or region, creating a clear and desperate market need?

---***Market Opportunity:*** Can you build a sustainable business model around this problem that is capable of generating massive revenue and attracting investment (the For Profit pillar)?

##Building Impact Into the DNA of Your Product

The judges will look for integration, not add-ons. Your social impact shouldn't be a Corporate Social Responsibility (CSR) department; it must be the core function of your service or product. This is how you fulfill the For People and For Planet pillars simultaneously.

Consider these integration points:

-- Is your product inherently solving ***SDG 12: Responsible Consumption and Production*** by using recycled materials or minimizing waste?
-- Does your revenue model directly lower the barriers to entry for low-income populations, addressing ***SDG 1: No Poverty?***
-- Is the creation of your service or product designed to employ marginalized groups, contributing to ***SDG 8: Decent Work and Economic Growth?***

***True social enterprise is when the financial viability depends on the social impact.***

##Measuring What Matters: Social ROI

If you can't measure your impact, it doesn't exist. Judges demand rigorous proof that your venture is achieving its goals. You must translate your SDG goal into quantifiable, verifiable metrics.

--***Output Metrics:*** Count the direct results of your action. (e.g., Number of solar units installed, Kilograms of plastic diverted from landfills).

--***Outcome Metrics:*** Measure the change resulting from your output. (e.g., Number of people gaining access to clean light, Percentage reduction in post-harvest loss).

--***Financial Alignment:*** Show the monetary value of your social impact. (e.g., Social Return on Investment (S-ROI), Lifetime Value of Social Impact).

***Pro Tip:*** Look up the official SDG indicators associated with your chosen goal. Aligning your company metrics with these global standards instantly increases your credibility.

Don't just chase the $1 million prize; chase the opportunity to permanently shift the needle on a global problem. Your SDG Playbook is waiting. Start building your integrated solution today`,
  },
];

export function turnMarkedUpTextIntoStructuredHTML(
  textContent: string
): string {
  const textLines = textContent.split(/\r?\n|\r/).filter((line) => line != "");
  const result = textLines.reduce((compiled, eachLine, index) => {
    if (eachLine.trim().startsWith("##")) {
      const cleanedUpLine = cleanMarkup("##", eachLine);
      const checkForBoldOrLinks = checkForSpecialCharacters(cleanedUpLine);
      compiled += `<h3>${checkForBoldOrLinks}</h3>`;

      return compiled;
    } else if (eachLine.trim().startsWith("#")) {
      const cleanedUpLine = cleanMarkup("#", eachLine);
      const checkForBoldOrLinks = checkForSpecialCharacters(cleanedUpLine);
      compiled += `<h2>${checkForBoldOrLinks}</h2>`;
      return compiled;
    } else if (eachLine.trim().startsWith("---")) {
      if (
        textLines[index - 1] &&
        !textLines[index - 1].trim().startsWith("---")
      )
        compiled += `<ul>`;

      const cleanedUpLine = cleanMarkup("---", eachLine);
      const checkForBoldOrLinks = checkForSpecialCharacters(cleanedUpLine);
      compiled += `<li>${checkForBoldOrLinks}</li>`;
      if (
        textLines[index + 1] &&
        !textLines[index + 1].trim().startsWith("---")
      )
        compiled += `</ul>`;
      return compiled;
    } else if (eachLine.trim().startsWith("--")) {
      if (textLines[index - 1] && !textLines[index - 1].trim().startsWith("--"))
        compiled += `<ol>`;
      const cleanedUpLine = cleanMarkup("--", eachLine);
      const checkForBoldOrLinks = checkForSpecialCharacters(cleanedUpLine);
      compiled += `<li>${checkForBoldOrLinks}</li>`;
      if (textLines[index + 1] && !textLines[index + 1].trim().startsWith("--"))
        compiled += `</ol>`;
      return compiled;
    } else {
      const checkForBoldOrLinks = checkForSpecialCharacters(eachLine);
      compiled += `<p>${checkForBoldOrLinks}</p>`;
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

function checkForSpecialCharacters(eachLine: string): string {
  let textString = eachLine;
  if (textString.includes("***")) {
    const processedText = extractBoundedText("***", textString);
    const boldTextInTag = `<strong>${processedText.cleanedUpBoldText}</strong>`;
    textString = textString.replace(processedText.boldText, boldTextInTag);
  }
  if (textString.includes("+++")) {
    const { boldText, cleanedUpBoldText } = extractBoundedText(
      "+++",
      textString
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
    textString = textString.replace(boldText, linkElement);
  }
  return textString;
}
