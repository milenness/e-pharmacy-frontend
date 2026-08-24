import MainBanner from "@/components/MainBanner";
import PromoBanners from "@/components/PromoBanners";
import AddPharmacyPromo from "@/components/AddPharmacyPromo";
import Features from "@/components/Features";
import MedicineStores from "@/components/MedicineStores";
import Reviews from "@/components/Reviews";

export default function HomePage() {
  return (
    <>
      <MainBanner />
      <PromoBanners />
      <MedicineStores />
      <AddPharmacyPromo />
      <Features />
      <Reviews />
    </>
  );
}
