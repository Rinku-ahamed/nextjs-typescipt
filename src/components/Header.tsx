import getCategories from "@/utils/getCategories";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";
const Header = async () => {
  const categoriesData: Promise<string[]> = getCategories();
  const categories = await categoriesData;
  return (
    <header className="bg-red-500 py-4">
      <nav className="max-w-[1200px] mx-auto px-3 md:px-1">
        <div className="flex justify-between items-center">
          <>
            <Link href="/" className="text-2xl text-white font-semibold">
              Decommerce
            </Link>
          </>
          <div className="hidden lg:flex  lg:flex-row justify-center gap-5 text-white capitalize">
            <Link href="/">Home</Link>
            {categories.map((item: string, i: number) => (
              <Link href={`/products/categories/${item}`} key={i}>
                {item}
              </Link>
            ))}
          </div>
          <div className="pe-2 flex gap-3 items-end">
            <div className="relative">
              <ShoppingCart className="text-white text-xl" />
              <span className="absolute bg-red-900 text-white w-4 h-4 flex justify-center items-center top-0 -right-2 text-[10px] rounded-full">
                10
              </span>
            </div>
            <span className="text-sm text-white">$100</span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
