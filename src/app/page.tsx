import BannerSlider from "@/components/BannerSlider";
import ProductSection from "@/components/ProductSection";
import getCategories from "@/utils/getCategories";
import { Suspense } from "react";
const Home = async () => {
  const categories: string[] = await getCategories();
  return (
    <main className="max-w-[1200px] mx-auto gap-5 mb-6">
      <BannerSlider />
      {/* Product section start */}
      <Suspense fallback={<h2>Loading...</h2>}>
        {categories.map((cat, i) => (
          <ProductSection key={i} cat={cat} />
        ))}
      </Suspense>
    </main>
  );
};
export default Home;
