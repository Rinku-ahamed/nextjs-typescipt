import getProducts from "@/utils/getProducts";
import React from "react";
export const generateMetadata = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const products = await getProducts();
  const singleProduct = products.find((item: any) => item.id === id);
  return {
    title: singleProduct?.title,
  };
};
const ProductDetails = ({ params: { id } }: { params: { id: string } }) => {
  return <div>ProductDetails {id}</div>;
};

export default ProductDetails;
