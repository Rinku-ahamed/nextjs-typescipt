import React from "react";

const CategoryProduct = ({
  params: { cateId },
}: {
  params: { cateId: string };
}) => {
  return <div>Category {cateId}</div>;
};

export default CategoryProduct;
