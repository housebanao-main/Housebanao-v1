import { CollabsSection } from "./component/MainSection/CollabrationSection/CollabsSection";
import { ConstructionSection } from "./component/MainSection/ConstructionSection/ConstructionSection";
import { Faqs } from "./component/MainSection/FAQs/Faqs";
import { GlimpseSection } from "./component/MainSection/GlimpseSection/GlimpseSection";
import { HeroSection } from "./component/MainSection/HeroSection";
import { InteriorSection } from "./component/MainSection/InteriorSection/InteriorSection";
import { Services } from "./component/MainSection/Services/Services";
import { Projects } from "./component/MainSection/Projects/Projects";
import { CustomerReviews } from "./component/MainSection/CustomerReviews/CustomerReviews";
import { TableSection } from "./component/MainSection/TableSection/TableSection";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Craft Your Dream Home with House Banao</title>
        <meta
          name="description"
          content="Change your space with House Banao! We’re the best construction & interior design experts in Gurgaon. Offering easy solutions, we help with homes & businesses. Our high-quality work and personal touch make your dreams come true. Check out our services & see amazing results from beginning to end."
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Craft Your Dream Home with House Banao"
        />
        <meta
          property="og:description"
          content="Change your space with House Banao! We’re the best construction & interior design experts in Gurgaon. Offering easy solutions, we help with homes & businesses. Our high-quality work and personal touch make your dreams come true. Check out our services & see amazing results from beginning to end."
        />
        <meta property="og:url" content="https://www.housebanao.com/" />
        <meta property="og:type" content="website" />
      </Head>

      <main className="flex min-h-screen flex-col items-center w-full justify-between bg-white">
        <HeroSection />
        <ConstructionSection />
        <InteriorSection />
        <Services />
        <GlimpseSection />
        <TableSection />
        <Projects />
        <Faqs />
        <CollabsSection />
      </main>
    </>
  );
}
