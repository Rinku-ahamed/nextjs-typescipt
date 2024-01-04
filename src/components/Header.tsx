import getCategories from "@/utils/getCategories";
import Link from "next/link";
import React from "react";
const Header = async () => {
  const categoriesData: Promise<string[]> = getCategories();
  const categories = await categoriesData;
  return (
    <header className="bg-red-500 py-4">
      <nav className="max-w-screen-lg mx-auto flex flex-col lg:flex-row justify-center gap-5 text-white capitalize">
        <Link href="/">Home</Link>
        {categories.map((item: string, i: number) => (
          <Link href={`/products/categories/${item}`} key={i}>
            {item}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
