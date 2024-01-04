import ProductCard from "@/components/ProductCard";
import getProducts from "@/utils/getProducts";
import { Suspense } from "react";

const Home = async () => {
  const products: Product[] = await getProducts();

  return (
    <main className="max-w-screen-lg mx-auto gap-5 mb-6">
      <h2 className="text-3xl text-center font-medium mt-5">
        All Products {products?.length}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
        <Suspense fallback={<h2>Loading...</h2>}>
          {products.map((item, i: number) => (
            <ProductCard key={i} item={item} />
          ))}
        </Suspense>
      </div>
    </main>
  );
};
export default Home;
