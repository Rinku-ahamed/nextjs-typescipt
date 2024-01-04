import getProducts from "@/utils/getProducts";
import getSingleProduct from "@/utils/getSingleProduct";
import Image from "next/image";
import React from "react";
export const generateMetadata = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const products = await getProducts();
  const singleProduct = products.find((item: any) => item.id === parseInt(id));
  return {
    title: singleProduct?.title,
  };
};
const ProductDetails = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const singleData: Product = await getSingleProduct(id);
  return (
    <section className="max-w-[1200px] m-auto py-10 px-4 lg:px-1 h-full">
      <div className="lg:flex gap-5">
        <div className="lg:w-5/12">
          <Image
            src={singleData?.image}
            width={600}
            height={500}
            alt={singleData?.title}
            className="w-full"
          />
        </div>
        <div className="lg:w-7/12 space-y-3">
          <h2 className="text-2xl font-semibold">{singleData?.title}</h2>
          <p className="text-lg">Price: &{singleData?.price}</p>
          <div>
            <h2 className="font-semibold ">Product Description:</h2>
            <p>{singleData?.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
