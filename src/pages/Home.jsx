import Hero from '../components/Hero';
import CommercialPrinting from '../components/CommercialPrinting';
import Merchandising from '../components/Merchandising';
import LargeFormat from '../components/LargeFormat';
import SpecializedServices from '../components/SpecializedServices';
import FinishesMaterials from '../components/FinishesMaterials';

export default function Home() {
  return (
    <>
      <Hero />
      <CommercialPrinting />
      <Merchandising />
      <LargeFormat />
      <SpecializedServices />
      <FinishesMaterials />
    </>
  );
}