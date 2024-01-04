import getProducts from "@/utils/getProducts";
import React, { Suspense } from "react";
import ProductCard from "./ProductCard";
const ProductSection = async ({ cat }: { cat: string }) => {
  const products: Product[] = await getProducts();
  const categoryProduct = products.filter((item) => item.category === cat);
  return (
    <section className="mt-8">
      <h2 className="text-xl capitalize font-semibold ps-2 mb-2">{cat}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 px-3 md:px-2">
        {categoryProduct?.slice(0, 5)?.map((item, i: number) => (
          <Suspense fallback={<h2>Loading...</h2>} key={i}>
            <ProductCard item={item} />
          </Suspense>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
