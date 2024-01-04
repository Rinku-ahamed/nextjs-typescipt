import Image from "next/image";
import React from "react";
import AddToCart from "./AddToCart";
import Link from "next/link";
const ProductCard = ({ item }: { item: Product }) => {
  return (
    <div className="border p-3 rounded text-center">
      <Link href={`/products/${item.title}`}>
        <Image
          src={item.image}
          width={200}
          height={240}
          alt={item.title}
          className="w-full h-[180px] md:h-[240px]"
          blurDataURL=""
        />
        <h2 className="text-[16px] mt-2 h-[51px] overflow-hidden">
          {item.title.slice(0, 52)}
        </h2>
      </Link>
      <AddToCart />
    </div>
  );
};

export default ProductCard;
