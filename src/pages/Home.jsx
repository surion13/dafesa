import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CommercialPrinting from '../components/CommercialPrinting';
import Merchandising from '../components/Merchandising';
import LargeFormat from '../components/LargeFormat';
import SpecializedServices from '../components/SpecializedServices';
import FinishesMaterials from '../components/FinishesMaterials';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-surface text-on-surface font-body-md selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col">
      <Navbar />
      <main className="max-w-[var(--spacing-container-max)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] space-y-24 py-12 flex-grow w-full">
        <Hero />
        <CommercialPrinting />
        <Merchandising />
        <LargeFormat />
        <SpecializedServices />
        <FinishesMaterials />
      </main>
      <Footer />
    </div>
  );
}